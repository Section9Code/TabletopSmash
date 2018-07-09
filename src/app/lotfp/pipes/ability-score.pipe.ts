import { Pipe, PipeTransform } from '@angular/core';
import { AbilityScore } from '../models/models';

@Pipe({
  name: 'abilityScore'
})
export class AbilityScorePipe implements PipeTransform {

  transform(value: AbilityScore, args?: any): string {

    // Valdiate
    if (!value) {
      return '-';
    }

    return `${value.value}`;
  }

}
