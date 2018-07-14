import { Component, OnInit, OnDestroy } from '@angular/core';
import { LotfpCharacter } from '../../../models/models';
import { Subscription, BehaviorSubject } from 'rxjs';
import { CharacterService } from '../../../services/character.service';
import { Router, ActivatedRoute, Params, ChildActivationEnd } from '@angular/router';
import { LotfpSpell, clericSpells, magicUserSpells, LotfpSpellDetails } from '../../../models/spells';
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
  spellsForUser: LotfpSpellDetails[];

  // Show the user their spells
  currentLevel = 0;
  currentLevelSpells: LotfpSpellDetails[] = [];
  currentLevelSlots = 0;
  currentLevelCharacterSpells: LotfpSpell[] = [];
  currentLevelEmptySlots = [];

  // Subscriptions
  routerSub: Subscription;
  characterSub: Subscription;

  constructor(
    private characterService: CharacterService,
    private router: Router,
    private route: ActivatedRoute,
    private toast: ToastyService) {
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
              this.spellsForUser = clericSpells;
              break;

            case 'elf':
            case 'magic user':
              this.spellsForUser = magicUserSpells;
              break;
          }

          // Does the user have access to spells
          if (this.spellsForUser && this.spellsForUser.length > 0) {

            // Sort characters spells
            if (!this.character.spells) { this.character.spells = []; }

            this.character.spells = this.character.spells.sort((a, b) => {
              if (a.level !== b.level) {
                // Level sort
                return (a.level < b.level) ? -1 : 1;
              } else {
                return (a.name < b.name) ? -1 : 1;
              }
            });

            // Reset the current spells being shown to level 1
            if (this.currentLevel === 0) {
              this.showSpells(1);
            } else {
              this.showSpells(this.currentLevel);
            }

          }

        }
      });
    });
  }

  ngOnDestroy(): void {
    this.routerSub.unsubscribe();
    this.characterSub.unsubscribe();
  }

  showSpells(level: number) {
    console.log('Show spells', level);
    this.currentLevel = level;
    this.currentLevelSpells = this.spellsForUser.filter(s => s.level === this.currentLevel);

    // Available slots
    this.currentLevelSlots = this.character[`level${level}Spells`];
    this.currentLevelCharacterSpells = this.character.spells.filter(s => s.level === this.currentLevel);
    this.currentLevelEmptySlots = Array(this.currentLevelSlots - this.currentLevelCharacterSpells.length);
  }

  spellDisabled(spell: LotfpSpell): boolean {
    // Any spell slots left at this level
    if (this.currentLevelCharacterSpells.length >= this.currentLevelSlots) { return true; }

    // Has the user already selected this spell
    const index = this.currentLevelCharacterSpells.findIndex(s => s.name === spell.name);
    if (index !== -1) { return true; }

    // Not disabled
    return false;
  }

  spellSelected(spell: LotfpSpell) {
    // Check the user has space for this spell
    if (!this.hasSpaceForSpell(spell)) {
      this.toast.warning(`No more space for level ${spell.level} spells`);
      return;
    } else {
      // Add spell to character
      let exitingSpells = this.character.spells;

      // Make sure the list isn't empty
      if (!exitingSpells) { exitingSpells = []; }

      // Make sure the user doesn't already have the spell
      const index = this.character.spells.findIndex(s => s.name === spell.name && s.level === spell.level);
      if (index !== -1) {
        // User already has spell
        this.toast.error({ msg: `The spell <b>${spell.name}</b> (Lvl ${spell.level}) is already in your spell book`, title: 'Duplicate spell' });
        return;
      }

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
      case 8: numberOfSlots = this.character.level8Spells; break;
      case 9: numberOfSlots = this.character.level9Spells; break;
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
    this.router.navigate(['../details'], { relativeTo: this.route });
  }
}
