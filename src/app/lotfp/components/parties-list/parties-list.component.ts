import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalDialogComponent } from '../../../core/components/modal-dialog/modal-dialog.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PartyService } from '../../services/party.service';
import { LotfpParty } from '../../models/models';

@Component({
  selector: 'parties-list',
  templateUrl: './parties-list.component.html',
  styleUrls: ['./parties-list.component.scss']
})
export class PartiesListComponent implements OnInit, OnDestroy {
  // The current list of parties
  parties: LotfpParty[];
  // The subscription to the database
  subParties: Subscription;
  // The modal dialog for adding parties
  @ViewChild('partyModal') partyModal: ModalDialogComponent;
  // Form for adding new parties
  partyForm: FormGroup;

  isLoading = false;

  constructor(private partiesSvc: PartyService) {
    // Setup party form
    this.partyForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('')
    });
  }

  ngOnInit() {
    this.load();
  }

  async load() {
    // Get the list of parties
    this.isLoading = true;
    const dataObservable = await this.partiesSvc.getMine();
    this.subParties = dataObservable.subscribe(data => {
      this.parties = data;
      this.isLoading = false;
    });
  }

  ngOnDestroy(): void {
    this.subParties.unsubscribe();
  }

  // Reset the add party modal and show
  showAddParty() {
    this.partyForm.reset();
    this.partyModal.loadingMode(false);
    this.partyModal.show();
  }

  // Add the party to the system
  async partyModalSaved() {
    this.partyModal.loadingMode(true);

    // Validate
    if (this.partyForm.valid) {
      const party: LotfpParty = {
        name: this.partyForm.controls.name.value,
        description: this.partyForm.controls.description.value
      };
      await this.partiesSvc.add(party);
      this.partyModal.hide();
    } else {
      alert('Please complete the form');
      this.partyModal.loadingMode(false);
    }
  }

  async delete(id: string) {
    if (confirm('Are you sure you want to delete this party?')) {
      await this.partiesSvc.delete(id);
    }
  }

}

