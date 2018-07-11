import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { CharacterService } from 'src/app/lotfp/services/character.service';
import { LotfpCharacter } from 'src/app/lotfp/models/models';
import { CharacterClasses, LotfpCharacterClass } from '../../../models/CharacterClasses';
import { BadWordChecker } from '../../../models/badwords';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'create-character-page',
  templateUrl: './create-character-page.component.html',
  styleUrls: ['./create-character-page.component.scss']
})
export class CreateCharacterPageComponent implements OnInit, OnDestroy {
  character: LotfpCharacter = { system: 'lotfp', name: '', background: '', level: 1, inProgress: true, isPublic: false };
  characterStartingLevel: number;
  routerSub: Subscription;
  characterSub: Subscription;
  showProfanityWarning = false;

  constructor(private characterService: CharacterService, private router: Router, private route: ActivatedRoute, private toast: ToastyService) { }

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

          // Setup the base character
          if (!this.character.name) { this.character.name = ''; }
          if (!this.character.background) { this.character.background = ''; }
          if (!this.character.level) { this.character.level = 1; }

          // Remeber the level the character had at the start
          this.characterStartingLevel = this.character.level;
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.routerSub.unsubscribe();
    this.characterSub.unsubscribe();
  }

  async next() {
    console.log(`Update character (${this.character.id})`, this.character);

    // Check for bad words
    if (this.character.isPublic) {
      // The user wants to make this character public, check for bad words
      const nameBad = !BadWordChecker.isClean(this.character.name);
      const backgroundBad = !BadWordChecker.isClean(this.character.background);
      if (nameBad || backgroundBad) {
        // The name or the descriptions contain banned words
        this.toast.error({ msg: 'This character cannot be made public, banned words have been detected in the name or backgroud. You can keep the character for yourself but you cannot make it public.', title: 'Banned words detected' });
        this.character.isPublic = false;
        this.showProfanityWarning = true;
        return;
      }
    }

    // All checks passed, update the record
    if (!this.character.isPublic) { this.character.isPublic = false; }
    await this.characterService.updateValues(this.character.id, { name: this.character.name, background: this.character.background, level: Number(this.character.level), inProgress: this.character.inProgress, isPublic: this.character.isPublic });

    // Has the user changed the characters level
    if (this.character.characterClass && this.character.level !== this.characterStartingLevel) {
      await this.characterService.recalculateClassTraits(this.character.id);
    }

    // Next page
    this.router.navigate(['abilities'], { relativeTo: this.route });
  }



}
