import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.scss']
})
export class ModalDialogComponent implements OnInit {
  @Input() showModal = false;
  @Input() showFooter = true;
  @Input() title = '';
  @Input() saveButtonText = 'Save';
  @Input() cancelButtonText = 'Cancel';

  @Output() dismissed = new EventEmitter(false);
  @Output() saved = new EventEmitter(false);

  private isLoading = false;

  constructor() { }

  ngOnInit() {
  }

  // Public functions ---------------------------
  // Show the modal
  public show() {
    this.showModal = true;
  }

  // Hide the modal
  public hide() {
    this.showModal = false;
  }

  // Set the save button to show the form is in progress
  public loadingMode(state: boolean) {
    this.isLoading = state;
  }

  // Events -------------------------------------
  onDismiss() {
    this.showModal = false;
    this.dismissed.emit();
  }

  onSave() {
    this.saved.emit();
  }

}
