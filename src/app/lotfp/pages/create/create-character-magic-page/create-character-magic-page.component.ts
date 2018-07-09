import { Component, OnInit, OnDestroy } from '@angular/core';
import { LotfpCharacter } from '../../../models/models';
import { Subscription, BehaviorSubject } from 'rxjs';
import { CharacterService } from '../../../services/character.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { LotfpSpell, clericSpells, magicUserSpells } from '../../../models/spells';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'create-character-magic-page',
  templateUrl: './create-character-magic-page.component.html',
  styleUrls: ['./create-character-magic-page.component.scss']
})
export class CreateCharacterMagicPageComponent implements OnInit, OnDestroy {
  // The users current character
  character: LotfpCharacter = {};

  // The list of spells to show to the user
  spellsForUser: BehaviorSubject<LotfpSpell[]>;

  // Subscriptions
  routerSub: Subscription;
  characterSub: Subscription;

  constructor(
    private characterService: CharacterService,
    private router: Router,
    private route: ActivatedRoute,
    private toast: ToastyService) {
    this.spellsForUser = new BehaviorSubject<LotfpSpell[]>([]);
  }

  ngOnInit() {
    // Get the character being created/edited
    this.routerSub = this.route.params.subscribe((params: Params) => {
      // Get the route
      const id = params['id'];
      // Get the character
      this.characterSub = this.characterService.getSingle(id).subscribe(response => {
        if (response && response.length > 0) {
          // Update the user
          console.log('Character updates', response);
          this.character = response.find(e => e.id === id);

          // What spells to show
          switch (this.character.characterClass.toLocaleLowerCase()) {
            case 'cleric':
              this.spellsForUser.next(clericSpells);
              console.log('Set cleric spells', this.spellsForUser.getValue());
              break;

            case 'elf':
            case 'magic user':
              this.spellsForUser.next(magicUserSpells);
              console.log('Set magic user spells', this.spellsForUser.getValue());
              break;
          }
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.routerSub.unsubscribe();
    this.characterSub.unsubscribe();
  }

  onSpellSelected(spell: LotfpSpell) {
    // Check the user has space for this spell
    if (!this.hasSpaceForSpell(spell)) {
      this.toast.warning(`Cannot add this spell`);
      return;
    } else {
      // Add spell to character
      let exitingSpells = this.character.spells;

      // Make sure the list isn't empty
      if (!exitingSpells) { exitingSpells = []; }

      // Add the spell to the list
      exitingSpells.push(spell);
      this.toast.success({ msg: `Added spell <b>${spell.name}</b> (Lvl ${spell.level})`, title: 'Spell added' });

      // Update the database
      this.characterService.updateValues(this.character.id, { spells: exitingSpells });
    }
  }

  private hasSpaceForSpell(spell: LotfpSpell): boolean {
    let numberOfSlots = 0;

    switch (spell.level) {
      case 1: numberOfSlots = this.character.level1Spells; break;
      case 2: numberOfSlots = this.character.level2Spells; break;
      case 3: numberOfSlots = this.character.level3Spells; break;
      case 4: numberOfSlots = this.character.level4Spells; break;
      case 5: numberOfSlots = this.character.level5Spells; break;
      case 6: numberOfSlots = this.character.level6Spells; break;
      case 7: numberOfSlots = this.character.level7Spells; break;
    }

    // Has slots
    if (numberOfSlots === 0) { return false; }    // The character has no slots at this level
    if (!this.character.spells) { return true; }  // The character has no spells at all so has space for this spell

    // Check the users existing spells
    const existingSpellsAtThisLevel = this.character.spells.filter(s => s.level === spell.level);
    if (existingSpellsAtThisLevel.length < numberOfSlots) {
      // The character has not filled their slots
      return true;
    } else {
      // The character has filled their slots
      return false;
    }
  }

  removeSpell(spell: LotfpSpell) {
    const spellList = this.character.spells;
    const index = spellList.findIndex(s => s.name === spell.name && s.level === spell.level);
    spellList.splice(index, 1);

    // Update the database
    this.characterService.updateValues(this.character.id, { spells: spellList });
  }

  next() {
    // Go to the next page
    if (this.character.inProgress) {
      // Finish the character
      this.characterService.updateValues(this.character.id, { inProgress: false });
      this.toast.success({ msg: 'Your character has been fully created, you can come back at any time and make updates', title: 'Character complete' });
    }
    this.router.navigate(['../summary'], { relativeTo: this.route });
  }
}
