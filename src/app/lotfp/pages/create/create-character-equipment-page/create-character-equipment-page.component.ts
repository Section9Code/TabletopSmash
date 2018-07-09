import { Component, OnInit, OnDestroy } from '@angular/core';
import { LotfpCharacter } from 'src/app/lotfp/models/models';
import { Subscription } from 'rxjs';
import { CharacterService } from '../../../services/character.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DiceService } from '../../../services/dice.service';

@Component({
  selector: 'create-character-equipment-page',
  templateUrl: './create-character-equipment-page.component.html',
  styleUrls: ['./create-character-equipment-page.component.scss']
})
export class CreateCharacterEquipmentPageComponent implements OnInit, OnDestroy {
  // The users current character
  character: LotfpCharacter = {};

  // Subscriptions
  routerSub: Subscription;
  characterSub: Subscription;

  constructor(
    private characterService: CharacterService,
    private router: Router,
    private route: ActivatedRoute,
    private dice: DiceService) { }

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

  next() {
    // Go to the next page
    console.log('Next');
    this.router.navigate(['../magic'], { relativeTo: this.route });
  }

}
