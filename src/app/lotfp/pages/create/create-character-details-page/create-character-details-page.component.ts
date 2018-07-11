import { Component, OnInit, OnDestroy } from '@angular/core';
import { LotfpCharacter } from '../../../models/models';
import { CharacterClasses } from '../../../models/CharacterClasses';
import { Subscription } from 'rxjs';
import { CharacterService } from '../../../services/character.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'create-character-details-page',
  templateUrl: './create-character-details-page.component.html',
  styleUrls: ['./create-character-details-page.component.scss']
})
export class CreateCharacterDetailsPageComponent implements OnInit, OnDestroy {
  // The users current character
  character: LotfpCharacter = {};

  // The list of all available characters
  allClasses = CharacterClasses;

  // Subscriptions
  routerSub: Subscription;
  characterSub: Subscription;

  constructor(
    private characterService: CharacterService,
    private router: Router,
    private route: ActivatedRoute,
    private toast: ToastyService) { }

  ngOnInit() {
    // Get the character being created/edited
    this.routerSub = this.route.params.subscribe((params: Params) => {
      // Get the route
      const id = params['id'];
      // Get the character
      this.characterSub = this.characterService.getSingle(id).subscribe(response => {
        if (response && response.length > 0) {
          console.log('Character updates', response);
          this.character = response.find(e => e.id === id);
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.routerSub.unsubscribe();
    this.characterSub.unsubscribe();
  }

  async next() {
    await this.characterService.updateValues(this.character.id, { alignment: this.character.alignment, sex: this.character.sex, age: this.character.age });

    // Go to the next page
    if (this.character.inProgress) {
      // Update the character
      await this.characterService.updateValues(this.character.id, { inProgress: false });
      this.toast.success({ msg: 'Your character has been fully created, you can come back at any time and make updates', title: 'Character complete' });
    }
    this.router.navigate(['../summary'], { relativeTo: this.route });
  }
}
