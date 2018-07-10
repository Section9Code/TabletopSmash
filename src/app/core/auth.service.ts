import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { firebase } from '@firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { NotifyService } from './notify.service';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { switchMap, startWith, tap, filter } from 'rxjs/operators';
import { ToastyService } from 'ng2-toasty';
import { TrackingService } from './tracking.service';

export interface User {
  uid: string;
  email?: string | null;
  photoURL?: string;
  displayName?: string;
}

@Injectable()
export class AuthService {
  user: Observable<User | null>;
  userSubject: BehaviorSubject<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private toast: ToastyService,
    private tracking: TrackingService
  ) {
    // Get the current state of the users authentication
    this.user = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
      // tap(user => localStorage.setItem('user', JSON.stringify(user))),
      // startWith(JSON.parse(localStorage.getItem('user')))
    );

    // Set the initial state of the user
    this.userSubject = new BehaviorSubject<User>(null);

  }

  ////// OAuth Methods /////

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    this.tracking.trackLogin('Google');
    return this.oAuthLogin(provider);
  }

  githubLogin() {
    const provider = new firebase.auth.GithubAuthProvider();
    this.tracking.trackLogin('Github');
    return this.oAuthLogin(provider);
  }

  facebookLogin() {
    const provider = new firebase.auth.FacebookAuthProvider();
    this.tracking.trackLogin('Facebook');
    return this.oAuthLogin(provider);
  }

  twitterLogin() {
    const provider = new firebase.auth.TwitterAuthProvider();
    this.tracking.trackLogin('Twitter');
    return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider: any) {
    return this.afAuth.auth
      .signInWithPopup(provider)
      .then(credential => {
        this.tracking.trackEvent('login_success');
        this.toast.success({ msg: 'You have successfully logged in', title: 'Login' });
        return this.updateUserData(credential.user);
      })
      .catch(error => this.handleError(error));
  }

  //// Anonymous Auth ////

  // anonymousLogin() {
  //   return this.afAuth.auth
  //     .signInAnonymously()
  //     .then(credential => {
  //       this.tracking.trackLogin('anonymous');
  //       this.toast.success({ msg: 'You have successfully logged in', title: 'Login' });
  //       return this.updateUserData(credential.user); // if using firestore
  //     })
  //     .catch(error => {
  //       this.handleError(error);
  //     });
  // }

  //// Email/Password Auth ////

  emailSignUp(email: string, password: string) {
    return this.afAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(credential => {
        this.tracking.trackSignUp('email');
        this.toast.success({ msg: 'You have successfully logged in', title: 'Login' });
        return this.updateUserData(credential.user); // if using firestore
      })
      .catch(error => this.handleError(error));
  }

  emailLogin(email: string, password: string) {
    return this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(credential => {
        this.tracking.trackLogin('email');
        this.toast.success({ msg: 'You have successfully logged in', title: 'Login' });
        return this.updateUserData(credential.user);
      })
      .catch(error => this.handleError(error));
  }

  // Sends email allowing user to reset password
  resetPassword(email: string) {
    const fbAuth = firebase.auth();

    return fbAuth
      .sendPasswordResetEmail(email)
      .then(() => {
        this.tracking.trackEvent('password_reset_email');
        this.toast.success({ msg: 'You have been sent an email, please use it too sign in', title: 'Sent' });
      })
      .catch(error => this.handleError(error));
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      this.toast.success('Logged out');
      this.tracking.trackEvent('sign_out');
      this.router.navigate(['/']);
    });
  }

  // If error, console log and notify user
  private handleError(error: Error) {
    console.error(error);
    this.tracking.trackException(error.message);
    this.toast.error({ msg: `Error while logging in: ${error.message}`, title: 'Login error' });
  }

  // Sets user data to firestore after succesful login
  private updateUserData(user: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${user.uid}`
    );

    const data: User = {
      uid: user.uid,
      email: user.email || null,
      displayName: user.displayName || 'unknown',
      photoURL: user.photoURL || 'https://goo.gl/Fz9nrQ'
    };

    // Update the user subject
    this.userSubject.next(data);

    return userRef.set(data);
  }
}
