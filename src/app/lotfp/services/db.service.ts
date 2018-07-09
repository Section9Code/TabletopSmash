import { Injectable, Optional } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { AuthService, User } from '../../core/auth.service';
import { map } from 'rxjs/operators';
import { BaseDocument, LotfpCharacter } from '../models/models';
import { WhereFilterOp } from '@firebase/firestore-types';
import { async } from 'rxjs/internal/scheduler/async';

export abstract class DBService<T extends BaseDocument> {
  // The collection of all the users parties
  private collection: AngularFirestoreCollection<T>;

  // The current user
  private currentUser: User = null;

  // The path to load data from
  protected path;

  // Subscriptions
  private authSub: Subscription;
  private dataSub: Subscription;

  constructor(private db: AngularFirestore, private auth: AuthService) {
    this.init();
  }

  // Called by the constructor but over ridden by the instances classed to setup the object
  protected abstract init();

  // Load the current user and all the data for them
  protected load() {
    // Watch the current user and load parties for them
    this.authSub = this.auth.user.subscribe(usr => {
      this.currentUser = usr;
      this.loadData();
    });
  }

  // Load the current users party data
  private loadData() {
    if (!this.path) {
      // tslint:disable-next-line:max-line-length
      throw new Error('Unable to load data for this service, no path found. Make sure you have replaced the init function of the base service with your own and set the path to download data from');
    }

    // Get the collection
    this.collection = this.db.collection(this.path);
  }

  // Add a new party
  async add(item: T) {
    // Set the values on the document
    item.id = this.db.createId();
    item.owner = this.currentUser.uid;

    // Store it
    await this.collection.doc(item.id).set(item);

    // Return the id
    return item.id;
  }

  async delete(id: string) {
    await this.collection.doc(id).delete();
  }

  // Get a single record from the database
  getSingle(id: string): Observable<T[]> {
    // Get the collection
    const coll = this.db.collection(this.path, ref => ref.where('id', '==', id));
    return this.collectionToObservable(coll);
  }

  // Get all the records in a collection
  getAll(): Observable<T[]> {
    // Get the collection
    this.collection = this.db.collection(this.path);
    return this.collectionToObservable(this.collection);
  }

  // Returns a promise that returns an observable of the data
  // It has to return a promise because the user data isn't immediately available
  getMine(): Promise<Observable<T[]>> {
    // Return the observable when it can be resolved
    return new Promise((resolve, reject) => {
      // Get the current user
      this.auth.user.subscribe(user => {
        const ob = this.query('owner', '==', user.uid);
        resolve(ob);
      });
    });
  }

  // Query a collection
  // Example
  // 'id' '==' 'aaa'
  // Get all the items where ID == aaa
  query(field: string, operator: WhereFilterOp, value: string): Observable<T[]> {
    const coll = this.db.collection(this.path, ref => ref.where(field, operator, value));
    return this.collectionToObservable(coll);
  }

  update(item: T) {
    this.collection.doc(item.id).set(item);
  }

  updateValues(itemId: string, values: T) {
    console.log('Update values', itemId);
    this.collection.doc(itemId).update(values);
  }

  // Convert a collection of records into an observable array of type
  protected collectionToObservable(collection: AngularFirestoreCollection): Observable<T[]> {
    const fbData = collection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const item = a.payload.doc.data() as T;
        item.id = a.payload.doc.id;
        return item;
      });
    }));

    return fbData;
  }

}
