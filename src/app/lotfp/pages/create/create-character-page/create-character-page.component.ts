import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { CharacterService } from 'src/app/lotfp/services/character.service';
import { LotfpCharacter } from 'src/app/lotfp/models/models';

@Component({
  selector: 'create-character-page',
  templateUrl: './create-character-page.component.html',
  styleUrls: ['./create-character-page.component.scss']
})
export class CreateCharacterPageComponent implements OnInit, OnDestroy {
  character: LotfpCharacter = { system: 'lotfp', name: '', background: '', level: 1, inProgress: true, isPublic: false};

  routerSub: Subscription;
  characterSub: Subscription;

  constructor(private characterService: CharacterService, private router: Router, private route: ActivatedRoute) { }

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
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.routerSub.unsubscribe();
    this.characterSub.unsubscribe();
  }

  next() {
    console.log(`Update character (${this.character.id})`, this.character);

    // Update the character
    this.characterService.updateValues(this.character.id, { name: this.character.name, background: this.character.background, level: Number(this.character.level), inProgress: this.character.inProgress, isPublic: this.character.isPublic });

    // Next page
    this.router.navigate(['abilities'], { relativeTo: this.route });
  }

}
