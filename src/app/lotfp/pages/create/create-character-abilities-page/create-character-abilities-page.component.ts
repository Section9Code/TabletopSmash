import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { LotfpCharacter } from 'src/app/lotfp/models/models';
import { CharacterService } from 'src/app/lotfp/services/character.service';
import { DiceService } from 'src/app/lotfp/services/dice.service';

@Component({
  selector: 'create-character-abilities-page',
  templateUrl: './create-character-abilities-page.component.html',
  styleUrls: ['./create-character-abilities-page.component.scss']
})
export class CreateCharacterAbilitiesPageComponent implements OnInit, OnDestroy {
  character: LotfpCharacter = {};

  routerSub: Subscription;
  characterSub: Subscription;

  constructor(
    private characterService: CharacterService,
    private dice: DiceService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // Get the character being created/edited
    this.routerSub = this.route.params.subscribe((params: Params) => {
      // Get the route
      console.log('Route changed', params['id']);
      const id = params['id'];
      // Get the character
      this.characterSub = this.characterService.getSingle(id).subscribe(response => {
        if (response && response.length > 0) {
          this.character = response.find(e => e.id === id);
        }
      });
    });
  }

  rollAbilities() {
    this.character.charisma = this.dice.abilityScore();
    this.character.constitution = this.dice.abilityScore();
    this.character.dexterity = this.dice.abilityScore();
    this.character.intelligence = this.dice.abilityScore();
    this.character.strength = this.dice.abilityScore();
    this.character.wisdom = this.dice.abilityScore();
  }

  ngOnDestroy(): void {
    this.routerSub.unsubscribe();
    this.characterSub.unsubscribe();
  }

  next() {
    console.log(`Update character (${this.character.id})`, this.character);

    this.characterService.updateValues(this.character.id, {
      // Setup ability scores
      charisma: this.character.charisma,
      constitution: this.character.constitution,
      dexterity: this.character.dexterity,
      intelligence: this.character.intelligence,
      strength: this.character.strength,
      wisdom: this.character.wisdom,

      // Setup other fields
      silver: this.character.silver ? this.character.silver : 0
    });

    this.characterService.recalculateArmourClass(this.character.id);
    this.characterService.recalculateEncumberance(this.character.id);

    // Move to the next page
    this.router.navigate(['../class'], { relativeTo: this.route });
  }
}
