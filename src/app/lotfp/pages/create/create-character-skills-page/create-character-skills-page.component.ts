import { Component, OnInit, OnDestroy } from '@angular/core';
import { CharacterService } from 'src/app/lotfp/services/character.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DiceService } from 'src/app/lotfp/services/dice.service';
import { Subscription } from 'rxjs';
import { LotfpCharacter } from '../../../models/models';

@Component({
  selector: 'create-character-skills-page',
  templateUrl: './create-character-skills-page.component.html',
  styleUrls: ['./create-character-skills-page.component.scss']
})
export class CreateCharacterSkillsPageComponent implements OnInit, OnDestroy {
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

  updateSkill(args: any) {
    console.log(`Update skill`, args);

    // The points can go up and down, adjust the number of points the user has to spend
    let newPointsToSpend = this.character.skillPointsToSpend;
    if (args.value > 0) { newPointsToSpend--; }
    if (args.value < 0) { newPointsToSpend++; }

    if (newPointsToSpend < 0) { return; }

    switch (args.name) {
      case 'architecture':
        // tslint:disable-next-line:max-line-length
        this.characterService.updateValues(this.character.id, { architectureSkill: (this.character.architectureSkill + args.value), skillPointsToSpend: newPointsToSpend });
        break;
      case 'bushcraft':
        // tslint:disable-next-line:max-line-length
        this.characterService.updateValues(this.character.id, { bushcraftSkill: (this.character.bushcraftSkill + args.value), skillPointsToSpend: newPointsToSpend });
        break;
      case 'climbing':
        // tslint:disable-next-line:max-line-length
        this.characterService.updateValues(this.character.id, { climbingSkill: (this.character.climbingSkill + args.value), skillPointsToSpend: newPointsToSpend });
        break;
      case 'languages':
        // tslint:disable-next-line:max-line-length
        this.characterService.updateValues(this.character.id, { languagesSkill: (this.character.languagesSkill + args.value), skillPointsToSpend: newPointsToSpend });
        break;


      case 'open doors':
        // tslint:disable-next-line:max-line-length
        this.characterService.updateValues(this.character.id, { openDoorsSkill: (this.character.openDoorsSkill + args.value), skillPointsToSpend: newPointsToSpend });
        break;

      case 'search':
        // tslint:disable-next-line:max-line-length
        this.characterService.updateValues(this.character.id, { searchSkill: (this.character.searchSkill + args.value), skillPointsToSpend: newPointsToSpend });
        break;

      case 'sleight of hand':
        // tslint:disable-next-line:max-line-length
        this.characterService.updateValues(this.character.id, { sleightOfHandSkill: (this.character.sleightOfHandSkill + args.value), skillPointsToSpend: newPointsToSpend });
        break;

      case 'sneak attack':
        // tslint:disable-next-line:max-line-length
        this.characterService.updateValues(this.character.id, { sneakAttackSkill: (this.character.sneakAttackSkill + args.value), skillPointsToSpend: newPointsToSpend });
        break;

      case 'stealth':
        // tslint:disable-next-line:max-line-length
        this.characterService.updateValues(this.character.id, { stealthSkill: (this.character.stealthSkill + args.value), skillPointsToSpend: newPointsToSpend });
        break;


      case 'tinkering':
        // tslint:disable-next-line:max-line-length
        this.characterService.updateValues(this.character.id, { tinkeringSkill: (this.character.tinkeringSkill + args.value), skillPointsToSpend: newPointsToSpend });
        break;




    }

  }

  next() {
    // Go to the next page
    console.log('Next');
    this.router.navigate(['../equipment'], { relativeTo: this.route });
  }

}
