import { Injectable } from '@angular/core';
import swal from 'sweetalert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  // Simple alert for the user
  alert(msg: string, title: string = '') {
    if (title === '') {
      swal(msg);
    } else {
      swal(msg, title);
    }
  }

  // A notification message for the user
  notify(msg: string, title: string, type: AlertType) {
    swal(title, msg, this.convertAlertType(type));
  }

  deleteWarning(msg: string, title: string): Promise<boolean> {
    return swal({
      title: title,
      text: msg,
      icon: 'warning',
      buttons: [true, true],
      dangerMode: true
    });
  }


  private convertAlertType(type: AlertType) {
    switch (type) {
      case AlertType.success:
        return 'success';
      case AlertType.info:
        return 'info';
      case AlertType.warning:
        return 'warning';
      case AlertType.error:
        return 'error';
    }
  }
}

export enum AlertType {
  success,
  info,
  warning,
  error
}
