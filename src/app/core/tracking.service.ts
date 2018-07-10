import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

declare let gtag: any;

@Injectable({
  providedIn: 'root'
})
export class TrackingService {

  constructor() { }

  // Track the URL of the page the user is currently on
  public trackPageChange(url: string) {
    if (!environment.production) { return; }
    gtag('config', environment.ga_id, { 'page_path': url });
  }

  // Track an event on a page
  public trackEvent(event: string, category = 'general', label = 'not set') {
    gtag('event', event, { 'event_category': category, 'event_label': label });
  }

  // Track the user logging in
  public trackLogin(method: string) {
    gtag('event', 'login', { method: method });
  }

  // Track someone signing up in the app
  public trackSignUp(method: string) {
    gtag('event', 'login', { method: method });
  }

  public trackException(errorMessage: string, fatal = false) {
    gtag('event', 'exception', { 'description': errorMessage, 'fatal': fatal });
  }
}
