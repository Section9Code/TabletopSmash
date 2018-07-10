import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';

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

}
