import { Pipe, PipeTransform } from '@angular/core';
import { AbilityScore } from '../models/models';

@Pipe({
  name: 'abilityModifier'
})
export class AbilityModifierPipe implements PipeTransform {

  transform(value: AbilityScore, args?: any): any {
    // Valdiate
    if (!value) {
      return '-';
    }

    let symbol = '';
    if (value.modifier >= 0) {
      symbol = '+';
    } else {
      symbol = '-';
    }

    return `${symbol} ${Math.abs(value.modifier)}`;
  }

}
