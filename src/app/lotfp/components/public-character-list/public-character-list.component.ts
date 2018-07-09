import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { LotfpCharacter } from '../../models/models';
import { Subscription } from 'rxjs';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { AuthService } from '../../../core/auth.service';
import { ToastyService } from 'ng2-toasty';
import { Router } from '@angular/router';

@Component({
  selector: 'public-character-list',
  templateUrl: './public-character-list.component.html',
  styleUrls: ['./public-character-list.component.scss']
})
export class PublicCharacterListComponent implements OnInit {
  characters: LotfpCharacter[] = [];
  subChar: Subscription;
  showNext = true;
  showPrev = true;

  lastKnownItemId: string;

  constructor(
    private characterService: CharacterService,
    private auth: AuthService,
    private toast: ToastyService,
    private router: Router
  ) { }

  ngOnInit() {
    // Load the records
    this.loadData();
  }

  loadData(itemId: string = null, startAfter = true) {
    const itemCount = 9;

    // Unsubscribe from the current subscription
    if (this.subChar) { this.subChar.unsubscribe(); }

    // Load in the next lot of characters
    this.subChar = this.characterService.getAllPublic(itemId, startAfter, itemCount).subscribe(response => {
      // Show the list
      console.log('Load', response);
      this.characters = response;

      if (this.characters.length === itemCount) {
        // A full list was loaded, move the last item id
        this.lastKnownItemId = this.characters[this.characters.length - 1].id;
        console.log('Last ID set', this.lastKnownItemId);
        this.showNext = true;
      } else {
        this.showNext = false;
      }

    });
  }

  next() {
    this.loadData(this.lastKnownItemId, true);
  }

  previous() {
    this.loadData(this.lastKnownItemId, false);
  }

  copyCharacter(character: LotfpCharacter) {
    // Copy the character
    const sub: Subscription = this.auth.user.subscribe(user => {
      if (user) {
        sub.unsubscribe();

        // Reset the key properties of the character
        character.name = '';
        character.isPublic = false;

        // Update the character
        this.characterService.add(character).then(newId => {
          this.toast.success({ msg: `The character <b>${character.name}</b> has been copied to your characters list`, title: 'Charcter copied' })
          this.router.navigate(['/lotfp/characters', newId]);
        });
      } else {
        sub.unsubscribe();
        this.toast.warning({ msg: 'To be able to copy a character you need to be logged in', title: 'Please log in' });
      }
    });
  };
}
