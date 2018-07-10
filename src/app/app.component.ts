import { Component } from '@angular/core';
import { AuthService } from './core/auth.service';
import { ToastyService, ToastyConfig } from 'ng2-toasty';
import { Router, NavigationEnd } from '@angular/router';
import { TrackingService } from './core/tracking.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor(private auth: AuthService, private toastyService: ToastyService, private toastyConfig: ToastyConfig, private router: Router, private tracking: TrackingService) {
    // Setups how toasts work for the application
    // More information: https://github.com/akserg/ng2-toasty
    this.toastyConfig.theme = 'default';
    this.toastyConfig.position = 'top-right';
    this.toastyConfig.showClose = true;

    // Listen to page events
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.tracking.trackPageChange(event.urlAfterRedirects);
      }
    });

  }
}
