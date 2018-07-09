import { Injectable } from '@angular/core';
import { AbilityScore } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class DiceService {

  constructor() { }

  singleD(sides: number): number {
    return this.roll(1, sides);
  }

  multiD(count: number, sides: number): number {
    return this.multiRoll(count, 1, sides).reduce((a, b) => (a + b));
  }

  singleD6(): number {
    return this.roll(1, 6);
  }

  multiD6(count: number): number[] {
    return this.multiRoll(count, 1, 6);
  }

  multiD6DropLowest(count: number): number[] {
    let values = this.multiRoll(count, 1, 6);
    values = this.dropLowest(values);
    return values;
  }

  abilityScore(): AbilityScore {
    const value = this.multiD6DropLowest(4).reduce((a, b) => a + b);
    const score: AbilityScore = {
      value: value,
      modifier: this.abilityModifier(value)
    };

    return score;
  }

  private abilityModifier(value: number): number {
    switch (value) {
      case 3: return -3;
      case 4:
      case 5: return -2;
      case 6:
      case 7:
      case 8: return -1;
      case 9:
      case 10:
      case 11:
      case 12: return 0;
      case 13:
      case 14:
      case 15: return 1;
      case 16:
      case 17: return 2;
      case 18: return 3;
    }
  }

  private roll(min: number, max: number): any {
    return Math.floor((Math.random() * max) + min);
  }

  private multiRoll(count: number, min: number, max: number): number[] {
    const dice = [];

    for (let i = 0; i < count; i++) {
      dice.push(this.roll(1, 6));
    }

    return dice;
  }

  private dropLowest(values: number[]): number[] {
    const minVal = Math.min.apply(null, values);
    const index = values.findIndex(v => v === minVal);
    values.splice(index, 1);
    return values;
  }
}
