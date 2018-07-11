import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LotfpCharacter } from '../../models/models';
import { LotfpWeapon, LotfpRangedWeapon, LotfpArmour } from '../../models/equipment';

@Component({
  selector: 'character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.scss']
})
export class CharacterSheetComponent implements OnInit {
  character: LotfpCharacter;

  // get the element with the #chessCanvas on it
  @ViewChild('sheet1Canvas') sheet1: ElementRef;
  @ViewChild('sheet2Canvas') sheet2: ElementRef;

  measureStartingX: number;
  measureStartingY: number;

  FONT_SIZE_PIXELS = 30;
  FONT_SMALL_SIZE_PIXELS = 20;
  FONT_FAMILY = 'Arial';
  FONT_COLOR = 'black';
  SHOW_BOUNDS = false;

  constructor() { }

  ngOnInit() {
  }

  // For measuring the page for developing parts
  canvasOnMouseDown(event: any) {
    console.log('Down', event);
    this.measureStartingX = event.offsetX;
    this.measureStartingY = event.offsetY;
  }

  canvasOnMouseUp(event: any) {
    console.log('Up', event);

    if (this.measureStartingX) {

      if (this.measureStartingX === event.offsetX && this.measureStartingY === event.offsetY) {
        console.log(`Box -- this.drawPip(context, ${this.measureStartingX}, ${this.measureStartingY}, 7);`);
      } else {
        console.log(`Box -- this.drawText(context, msg, ${this.measureStartingX}, ${this.measureStartingY}, ${event.offsetX}, ${event.offsetY}, this.FONT_SIZE_PIXELS);`);
      }
      this.measureStartingX = null;
      this.measureStartingY = null;
    }
  }

  public renderSheets(char: LotfpCharacter) {
    this.character = char;
    const context: CanvasRenderingContext2D = this.sheet1.nativeElement.getContext('2d');
    const context2: CanvasRenderingContext2D = this.sheet2.nativeElement.getContext('2d');

    this.renderSheet1(context, 1000, 1414);
    this.renderSheet2(context2, 1000, 1414);
  }

  // Render the first character sheet
  private renderSheet1(context: CanvasRenderingContext2D, width: number, height: number) {
    // Setup
    context.clearRect(0, 0, width, height);
    context.fillStyle = this.FONT_COLOR;
    context.font = `${this.FONT_SIZE_PIXELS}px ${this.FONT_FAMILY}`;

    // Details
    this.drawText(context, this.character.name, 491, 48, 703, 77, this.FONT_SIZE_PIXELS);
    this.drawText(context, this.character.characterClass, 442, 100, 603, 120, this.FONT_SMALL_SIZE_PIXELS);
    this.drawText(context, this.character.level, 617, 100, 773, 120, this.FONT_SMALL_SIZE_PIXELS);
    this.drawText(context, this.character.alignment, 782, 100, 926, 120, this.FONT_SMALL_SIZE_PIXELS);
    this.drawText(context, this.character.age, 441, 153, 543, 175, this.FONT_SMALL_SIZE_PIXELS);
    this.drawText(context, this.character.sex, 566, 153, 614, 175, this.FONT_SMALL_SIZE_PIXELS);

    // Ability scores
    this.drawText(context, this.character.charisma.value, 117, 258, 167, 309, this.FONT_SIZE_PIXELS);
    this.drawText(context, this.character.charisma.modifier, 178, 258, 226, 309, this.FONT_SIZE_PIXELS);
    this.drawText(context, this.character.constitution.value, 117, 342, 166, 392, this.FONT_SIZE_PIXELS);
    this.drawText(context, this.character.constitution.modifier, 178, 342, 226, 392, this.FONT_SIZE_PIXELS);
    this.drawText(context, this.character.dexterity.value, 117, 421, 166, 470, this.FONT_SIZE_PIXELS);
    this.drawText(context, this.character.dexterity.modifier, 178, 421, 226, 470, this.FONT_SIZE_PIXELS);
    this.drawText(context, this.character.intelligence.value, 117, 502, 166, 551, this.FONT_SIZE_PIXELS);
    this.drawText(context, this.character.intelligence.modifier, 178, 502, 226, 551, this.FONT_SIZE_PIXELS);
    this.drawText(context, this.character.strength.value, 117, 582, 166, 630, this.FONT_SIZE_PIXELS);
    this.drawText(context, this.character.strength.modifier, 178, 582, 226, 630, this.FONT_SIZE_PIXELS);
    this.drawText(context, this.character.wisdom.value, 117, 663, 166, 716, this.FONT_SIZE_PIXELS);
    this.drawText(context, this.character.wisdom.modifier, 178, 663, 226, 716, this.FONT_SIZE_PIXELS);

    // Saving throws
    this.drawText(context, this.character.paralyseSavingThrow, 444, 268, 513, 338, this.FONT_SIZE_PIXELS);
    this.drawText(context, this.character.poisonSavingThrow, 543, 268, 615, 338, this.FONT_SIZE_PIXELS);
    this.drawText(context, this.character.breathSavingThrow, 649, 268, 720, 338, this.FONT_SIZE_PIXELS);
    this.drawText(context, this.character.magicSavingThrow, 752, 268, 825, 338, this.FONT_SIZE_PIXELS);
    this.drawText(context, this.character.deviceSavingThrow, 856, 268, 929, 338, this.FONT_SIZE_PIXELS);

    // Attack bonus
    this.drawText(context, this.character.attackBonus, 445, 487, 515, 558, this.FONT_SIZE_PIXELS);
    this.drawText(context, `${this.character.attackBonus + this.character.strength.modifier}`, 535, 487, 604, 558, this.FONT_SIZE_PIXELS);
    this.drawText(context, `${this.character.attackBonus + this.character.dexterity.modifier}`, 626, 487, 694, 558, this.FONT_SIZE_PIXELS);
    this.drawText(context, this.character.hitPoints, 844, 461, 897, 508, this.FONT_SIZE_PIXELS);
    this.drawText(context, this.character.hitPoints, 844, 520, 897, 574, this.FONT_SIZE_PIXELS);
    this.drawDice(context, this.character.surpriseChange, 743, 498);

    // Armour class
    this.drawText(context, this.character.acMelee, 488, 659, 542, 711, this.FONT_SIZE_PIXELS);
    this.drawText(context, this.character.acRanged, 588, 657, 639, 709, this.FONT_SIZE_PIXELS);
    this.drawText(context, this.character.acWithoutShield, 489, 746, 539, 785, this.FONT_SIZE_PIXELS);
    this.drawText(context, this.character.acSurprised, 588, 744, 638, 785, this.FONT_SIZE_PIXELS);

    // Weapon list
    this.drawList(context, this.weaponTextNames(this.character.weapons, this.character.rangedWeapons), 435, 953, 643, 1117, this.FONT_SMALL_SIZE_PIXELS, this.FONT_SMALL_SIZE_PIXELS + 7, 6);
    this.drawList(context, this.weaponTextDamage(this.character.weapons, this.character.rangedWeapons), 689, 953, 767, 1117, this.FONT_SMALL_SIZE_PIXELS, this.FONT_SMALL_SIZE_PIXELS + 7, 6);
    this.drawList(context, this.weaponTextRanges(this.character.weapons, this.character.rangedWeapons), 776, 953, 931, 1117, this.FONT_SMALL_SIZE_PIXELS, this.FONT_SMALL_SIZE_PIXELS + 7, 6);

    // Skills
    this.drawDice(context, this.character.architectureSkill, 85, 813);
    this.drawDice(context, this.character.bushcraftSkill, 176, 813);
    this.drawDice(context, this.character.climbingSkill, 260, 813);
    this.drawDice(context, this.character.languagesSkill, 343, 813);

    this.drawDice(context, this.character.openDoorsSkill, 85, 916);
    this.drawDice(context, this.character.searchSkill, 176, 916);
    this.drawDice(context, this.character.sleightOfHandSkill, 260, 916);
    this.drawDice(context, this.character.sneakAttackSkill, 343, 916);

    this.drawDice(context, this.character.stealthSkill, 176, 1002);
    this.drawDice(context, this.character.tinkeringSkill, 259, 1002);

    // Combat options
    this.drawPip(context, 735, 668, 7);               // Standard Attack Box (Everyone)
    this.drawPip(context, 735, 712, 7);               // Parry (Everyone)

    if (this.character.enhancedCombatOptions) {
      this.drawPip(context, 851, 732, 7);             // Enhanced Parry
      this.drawPip(context, 735, 758, 7);             // Press
      this.drawPip(context, 735, 803, 7);             // Defensive
    } else {
      this.drawPip(context, 775, 732, 7);             // Standard parry
    }

  }

  private renderSheet2(context: CanvasRenderingContext2D, width: number, height: number) {
    // Setup
    context.clearRect(0, 0, width, height);
    context.fillStyle = this.FONT_COLOR;
    context.font = `${this.FONT_SIZE_PIXELS}px ${this.FONT_FAMILY}`;

    // Silver
    if (this.character.silver) {
      this.drawText(context, `${this.character.silver.toFixed(2)} sp`, 65, 82, 200, 110, this.FONT_SMALL_SIZE_PIXELS);
    }

    // Gems
    if (this.character.equipment) {
      const gems = this.character.equipment.filter(i => i.name === 'Gem');
      this.drawText(context, gems.length, 257, 82, 329, 110, this.FONT_SMALL_SIZE_PIXELS);
    }

    // Emcumberance
    this.renderEncumberancePips(context);
    this.renderNonEncumberingList(context);
    this.renderEquipmentList(context);
  }


  private weaponTextRanges(weapons: LotfpWeapon[], ranged: LotfpRangedWeapon[]): string[] {
    const list: string[] = [];

    if (weapons) {
      weapons.forEach(w => {
        const item = ``;
        list.push(item);
      });
    }

    if (ranged) {
      ranged.forEach(w => {
        const item = `  ${w.shortRange}'    ${w.mediumRange}'   ${w.longRange}' `;
        list.push(item);
      });
    }

    return list;
  }

  private weaponTextNames(weapons: LotfpWeapon[], ranged: LotfpRangedWeapon[]): string[] {
    const list: string[] = [];

    if (weapons) {
      weapons.forEach(w => {
        const item = `${w.name}`;
        list.push(item);
      });
    }

    if (ranged) {
      ranged.forEach(w => {
        const item = `${w.name}`;
        list.push(item);
      });
    }

    return list;
  }

  private weaponTextDamage(weapons: LotfpWeapon[], ranged: LotfpRangedWeapon[]): string[] {
    const list: string[] = [];

    if (weapons) {
      weapons.forEach(w => {
        const item = `${w.attackDiceCount}d${w.attackDiceSize}`;
        list.push(item);
      });
    }

    if (ranged) {
      ranged.forEach(w => {
        const item = `${w.attackDiceCount}d${w.attackDiceSize}`;
        list.push(item);
      });
    }

    return list;
  }

  private renderNonEncumberingList(ctx: CanvasRenderingContext2D) {
    const armour = [];
    let weapons = [];
    let rangedWeapons = [];
    let equipment = [];

    // Get all the non-encumbering itesm (armour and shields are classed a non-encumbering so they are listed)
    if (this.character.armour) { armour.push(this.character.armour); }
    if (this.character.weapons) { weapons = this.character.weapons.filter(w => !w.encumbering || w.oversized); }
    if (this.character.rangedWeapons) { rangedWeapons = this.character.rangedWeapons.filter(w => !w.encumbering || w.oversized); }
    if (this.character.equipment) { equipment = this.character.equipment.filter(e => !e.encumbering || e.oversized); }

    let allItems = [];
    let allItems2 = [];
    allItems = [].concat.apply([], [armour, weapons, rangedWeapons, equipment]);

    allItems = this.groupItems(allItems.map(i => i.name));

    // Split the list into two lots
    if (allItems.length > 8) {
      allItems2 = allItems.slice(8);
      allItems.splice(8, allItems.length - 8);
    }

    // Draw the lists
    this.drawList(ctx, allItems, 372, 760, 646, 941, this.FONT_SMALL_SIZE_PIXELS, this.FONT_SMALL_SIZE_PIXELS, 3);
    this.drawList(ctx, allItems2, 653, 760, 927, 941, this.FONT_SMALL_SIZE_PIXELS, this.FONT_SMALL_SIZE_PIXELS, 3);
  }

  // Goes through the list of items, turns everything into a name
  // and groups together multiple items into counts
  groupItems(items: string[]): string[] {
    console.log('Grouping items', items);

    // The list that will be returned
    const output = [];
    let i = 0;
    for (i = 0; i < items.length; i++) {
      // Get the item
      const item = items[i];
      // Search the rest of the array for matching items
      const matchingItems = items.filter(q => q === item);
      const count = matchingItems.length;

      if (count === 1) {
        // This item is unique
        output.push(item);
      } else {
        // There are multiple items. Remove them all from the list and add only one
        // item with its amount and name.
        // Move the pointer back one
        i--;
        // Remove all the items from the array
        items = items.filter(q => q !== item);
        // Add the item to the output
        output.push(`${count}x ${item}`);
      }
    }

    // Return the list
    return output;
  }

  private renderEquipmentList(ctx: CanvasRenderingContext2D) {
    const shields = [];
    let weapons = [];
    let rangedWeapons = [];
    let equipment = [];

    if (this.character.shield) { shields.push(this.character.shield); }
    if (this.character.weapons) { weapons = this.character.weapons.filter(w => w.encumbering && !w.oversized); }
    if (this.character.rangedWeapons) { rangedWeapons = this.character.rangedWeapons.filter(w => w.encumbering && !w.oversized); }
    if (this.character.equipment) { equipment = this.character.equipment.filter(e => e.encumbering && !e.oversized); }

    let allItems = [];
    allItems = [].concat.apply([], [shields, weapons, rangedWeapons, equipment]);

    this.drawList(ctx, allItems.map(i => i.name), 62, 290, 247, 1348, this.FONT_SMALL_SIZE_PIXELS, this.FONT_SMALL_SIZE_PIXELS + 7, 8.2);
  }

  private renderEncumberancePips(ctx: CanvasRenderingContext2D) {

    let armourEncumberancePoints = 0;

    if (this.character.armour && this.character.armour.encumberancePoints === 1) {
      // Chain armour
      armourEncumberancePoints = 1;
      this.drawPip(ctx, 432, 407, 7);
    }

    if (this.character.armour && this.character.armour.encumberancePoints === 2) {
      // Plate armour
      armourEncumberancePoints = 2;
      this.drawPip(ctx, 432, 426, 7);
      this.drawPip(ctx, 417, 426, 7);
    }

    // Oversized items - Get all the oversized items for their own pips
    let osWeapons = 0;
    let osRangedWeapons = 0;
    let osEquipment = 0;
    if (this.character.weapons) { osWeapons = this.character.weapons.filter(w => w.oversized).length; }
    if (this.character.rangedWeapons) { osRangedWeapons = this.character.rangedWeapons.filter(w => w.oversized).length; }
    if (this.character.equipment) { osEquipment = this.character.equipment.filter(e => e.oversized).length; }

    // concat all the arrays
    const osItems = osWeapons + osRangedWeapons + osEquipment;

    // Draw encumberance pips ----------------
    // Points of encumberance
    if (this.character.encumberancePoints - (armourEncumberancePoints + osItems) >= 1) { this.drawPip(ctx, 432, 445, 7); }
    if (this.character.encumberancePoints - (armourEncumberancePoints + osItems) >= 2) { this.drawPip(ctx, 432, 462, 7); }
    if (this.character.encumberancePoints - (armourEncumberancePoints + osItems) >= 3) { this.drawPip(ctx, 432, 481, 7); }
    if (this.character.encumberancePoints - (armourEncumberancePoints + osItems) >= 4) { this.drawPip(ctx, 432, 500, 7); }


    if (osItems >= 1) { this.drawPip(ctx, 432, 520, 7); }
    if (osItems >= 2) { this.drawPip(ctx, 417, 520, 7); }
    if (osItems >= 3) { this.drawPip(ctx, 403, 520, 7); }
    if (osItems >= 4) { this.drawPip(ctx, 388, 520, 7); }
  }

  // Draw text on the page in a certain area
  private drawText(ctx: CanvasRenderingContext2D, text: any, topLeftX: number, topLeftY: number, bottomRightX: number, bottomRightY: number, fontSize: number, center: boolean = true) {
    if (!text) { return; }

    ctx.font = `${fontSize}px ${this.FONT_FAMILY}`;
    const width = bottomRightX - topLeftX;
    const height = bottomRightY - topLeftY;
    const centerX = bottomRightX - (width / 2);
    const centerY = bottomRightY - (height / 2);

    const textSize = ctx.measureText(text);

    if (this.SHOW_BOUNDS) {
      ctx.strokeStyle = '#39FF14';
      ctx.rect(topLeftX, topLeftY, width, height);
      ctx.stroke();
    }

    if (center) {
      ctx.fillText(text, centerX - (textSize.width / 2), centerY + (this.FONT_SIZE_PIXELS / 2.3));
    } else {
      ctx.fillText(text, topLeftX, bottomRightY);
    }
  }

  private drawList(ctx: CanvasRenderingContext2D, text: string[], topLeftX: number, topLeftY: number, bottomRightX: number, bottomRightY: number, fontSize: number, lineHeight: number, bottomMargin: number) {
    const width = bottomRightX - topLeftX;
    const height = bottomRightY - topLeftY;

    if (this.SHOW_BOUNDS) {
      ctx.strokeStyle = '#39FF14';
      ctx.rect(topLeftX, topLeftY, width, height);
      ctx.stroke();
    }

    let offsetY = 0;

    text.forEach(i => {
      this.drawText(ctx, i, topLeftX, topLeftY + offsetY, bottomRightX, topLeftY + offsetY + lineHeight, fontSize, false);

      offsetY += lineHeight + bottomMargin;
    });
  }

  private drawDice(ctx: CanvasRenderingContext2D, score: number, topLeftX: number, topLeftY) {
    const width = 45;
    const height = 46;

    const radius = 4;

    const pipX: number[] = [topLeftX + 12, topLeftX + 34, topLeftX + 12, topLeftX + 34, topLeftX + 12, topLeftX + 34];
    const pipY: number[] = [topLeftY + 13, topLeftY + 13, topLeftY + 24, topLeftY + 24, topLeftY + 36, topLeftY + 36];


    if (this.SHOW_BOUNDS) {
      ctx.beginPath();
      ctx.strokeStyle = '#39FF14';
      ctx.rect(topLeftX, topLeftY, width, height);
      ctx.stroke();

      this.drawPipBounds(ctx, pipX[0], pipY[0], radius, '#39FF14');
      this.drawPipBounds(ctx, pipX[1], pipY[1], radius, '#39FF14');
      this.drawPipBounds(ctx, pipX[2], pipY[2], radius, '#39FF14');
      this.drawPipBounds(ctx, pipX[3], pipY[3], radius, '#39FF14');
      this.drawPipBounds(ctx, pipX[4], pipY[4], radius, '#39FF14');
      this.drawPipBounds(ctx, pipX[5], pipY[5], radius, '#39FF14');
    }

    if (score >= 1) { this.drawPip(ctx, pipX[0], pipY[0], radius); }
    if (score >= 2) { this.drawPip(ctx, pipX[1], pipY[1], radius); }
    if (score >= 3) { this.drawPip(ctx, pipX[2], pipY[2], radius); }
    if (score >= 4) { this.drawPip(ctx, pipX[3], pipY[3], radius); }
    if (score >= 5) { this.drawPip(ctx, pipX[4], pipY[4], radius); }
    if (score >= 6) { this.drawPip(ctx, pipX[5], pipY[5], radius); }

    this.drawPipBounds(ctx, pipX[0], pipY[0], radius, '#000000');
    this.drawPipBounds(ctx, pipX[1], pipY[1], radius, '#000000');
    this.drawPipBounds(ctx, pipX[2], pipY[2], radius, '#000000');
    this.drawPipBounds(ctx, pipX[3], pipY[3], radius, '#000000');
    this.drawPipBounds(ctx, pipX[4], pipY[4], radius, '#000000');
    this.drawPipBounds(ctx, pipX[5], pipY[5], radius, '#000000');

  }

  private drawPipBounds(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number, colour: string) {
    ctx.beginPath();
    ctx.strokeStyle = colour;
    ctx.lineWidth = 2;
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
    ctx.stroke();
  }

  private drawPip(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.stroke();
  }

}
