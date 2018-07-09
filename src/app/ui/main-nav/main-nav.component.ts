import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '../../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  show = false;
  currentUser: User;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.auth.user.subscribe(
      response => {
        console.log('Nav: User changed', response);
        this.currentUser = response;
      }
    );
  }

  toggleCollapse() {
    this.show = !this.show;
  }

  logout() {
    this.auth.signOut();
    this.router.navigate(['/']);
  }
}
