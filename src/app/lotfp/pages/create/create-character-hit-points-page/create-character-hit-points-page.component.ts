import { Component, OnInit, OnDestroy } from '@angular/core';
import { LotfpCharacter } from '../../../models/models';
import { Subscription } from 'rxjs';
import { CharacterService } from '../../../services/character.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CharacterClasses, LotfpCharacterClass, LotfpClassSkills, LotfpClassFeaturesDetails } from 'src/app/lotfp/models/CharacterClasses';
import { DiceService } from '../../../services/dice.service';

@Component({
  selector: 'create-character-hit-points-page',
  templateUrl: './create-character-hit-points-page.component.html',
  styleUrls: ['./create-character-hit-points-page.component.scss']
})
export class CreateCharacterHitPointsPageComponent implements OnInit, OnDestroy {
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

  async selectClass(selectedClass: LotfpCharacterClass) {
    const charClass: LotfpCharacterClass = this.allClasses.find(i => i.name === selectedClass.name);
    const classAbilities = charClass.characterAbilities.find(a => a.level === this.character.level);

    // Update the character
    await this.characterService.updateValues(this.character.id, {
      characterClass: selectedClass.name,
      hitPoints: null,
      attackBonus: classAbilities.attackBonus,
      surpriseChange: charClass.surpriseChance,
      enhancedCombatOptions: charClass.enhancedCombatOptions,

      // Saving throws
      paralyseSavingThrow: classAbilities.savingThrows.paralyze,
      poisonSavingThrow: classAbilities.savingThrows.poison,
      breathSavingThrow: classAbilities.savingThrows.breath,
      deviceSavingThrow: classAbilities.savingThrows.device,
      magicSavingThrow: classAbilities.savingThrows.magic,

      // Spells
      level1Spells: classAbilities.level1Spells,
      level2Spells: classAbilities.level2Spells,
      level3Spells: classAbilities.level3Spells,
      level4Spells: classAbilities.level4Spells,
      level5Spells: classAbilities.level5Spells,
      level6Spells: classAbilities.level6Spells,
      level7Spells: classAbilities.level7Spells,
      level8Spells: classAbilities.level8Spells,
      level9Spells: classAbilities.level9Spells
    });
  }

  rollScores() {
    this.rollHitPoints();
    this.rollStartingWealth();
    this.rollSkills();
  }

  // Setup the starting hit points for the character
  rollHitPoints() {
    const charClass: LotfpCharacterClass = this.allClasses.find(i => i.name === this.character.characterClass);
    let hitPoints = 0;

    // Go through all the levels from 1 to the users level and add up the hit points for the user
    for (let i = 1; i <= this.character.level; i++) {
      const classFeature = charClass.characterAbilities.find(a => a.level === i);

      // Roll hit dice
      if (classFeature.hitPointsDiceSize) {
        hitPoints += this.dice.singleD(classFeature.hitPointsDiceSize);
      }

      // Add hit point amount from class
      if (classFeature.hitPointsAmount) {
        hitPoints += classFeature.hitPointsAmount;
      }

      // Add constitution modifier
      if (classFeature.constitutionModApplies && classFeature.constitutionModApplies === true) {
        hitPoints += this.character.constitution.modifier;
      }

      // Are the hit points above the minimum
      if (hitPoints < charClass.minHitPoints) {
        hitPoints = charClass.minHitPoints;
      }
    }

    // Update the character hit points
    this.characterService.updateValues(this.character.id, { hitPoints: hitPoints });
  }

  // Setup the starting wealth for the character
  rollStartingWealth() {
    let startingSp = 0;

    if (this.character.level === 1) {
      startingSp = this.dice.multiD(3, 6) * 10;
    }

    if (this.character.level > 1) {
      // Roll 3d6 for every level over 1 (i.e.Level 4 = 3x3d6 * 10)
      startingSp = this.dice.multiD(((this.character.level - 1) * 3), 6) * 10;
      startingSp += 180;
    }

    // Update the players starting SP
    this.characterService.updateValues(this.character.id, { silver: startingSp });
  }

  // Setup the skill points for the character
  rollSkills() {
    const charClass: LotfpCharacterClass = this.allClasses.find(i => i.name === this.character.characterClass);
    const classSkills: LotfpClassSkills = charClass.characterSkills[this.character.level - 1];
    const classDetails: LotfpClassFeaturesDetails = charClass.characterAbilities.find(i => i.level === this.character.level);

    // Sum skill points
    let sumSkillPoints = 0;
    for (let i = 0; i < this.character.level; i++) {
      sumSkillPoints += charClass.characterAbilities[i].skillPoints;
    }


    this.characterService.updateValues(this.character.id, {
      // Class details
      skillPointsToSpend: sumSkillPoints,

      // Class base skills
      architectureSkill: classSkills.architecture,
      architectureSkillMin: classSkills.architecture,
      bushcraftSkill: classSkills.bushcraft,
      bushcraftSkillMin: classSkills.bushcraft,
      climbingSkill: classSkills.climbing,
      climbingSkillMin: classSkills.climbing,
      languagesSkill: this.calcSkill(classSkills.languages, this.character.intelligence.modifier),
      languagesSkillMin: this.calcSkill(classSkills.languages, this.character.intelligence.modifier),
      openDoorsSkill: this.calcSkill(classSkills.openDoors, this.character.strength.modifier),
      openDoorsSkillMin: this.calcSkill(classSkills.openDoors, this.character.strength.modifier),
      searchSkill: classSkills.search,
      searchSkillMin: classSkills.search,
      sleightOfHandSkill: classSkills.sleightOfHand,
      sleightOfHandSkillMin: classSkills.sleightOfHand,
      sneakAttackSkill: classSkills.sneakAttack,
      sneakAttackSkillMin: classSkills.sneakAttack,
      stealthSkill: classSkills.stealth,
      stealthSkillMin: classSkills.stealth,
      tinkeringSkill: classSkills.tinkering,
      tinkeringSkillMin: classSkills.tinkering
    });
  }

  private calcSkill(skillPoints: number, modifier: number): number {
    const total = skillPoints + modifier;
    if (total <= 0) {
      return 1;
    } else {
      return total;
    }
  }

  next() {
    // Go to the next page
    console.log('Next');
    this.router.navigate(['../skills'], { relativeTo: this.route });
  }

}
