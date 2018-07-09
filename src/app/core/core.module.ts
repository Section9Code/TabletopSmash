import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { NotifyService } from './notify.service';
import { BrowserModule } from '@angular/platform-browser';
import { ModalDialogComponent } from './components/modal-dialog/modal-dialog.component';

@NgModule({
  imports:[
    BrowserModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    NotifyService
  ],
  declarations: [
    ModalDialogComponent
  ],
  exports: [
    ModalDialogComponent
  ]
})
export class CoreModule { }
