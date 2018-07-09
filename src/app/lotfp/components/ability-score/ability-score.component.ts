import { Component, OnInit, Input } from '@angular/core';
import { AbilityScore } from '../../models/models';

@Component({
  selector: 'ability-score',
  templateUrl: './ability-score.component.html',
  styleUrls: ['./ability-score.component.scss']
})
export class AbilityScoreComponent implements OnInit {
  @Input() ability: AbilityScore;
  @Input() title = '---';
  modifierSymbol = '';

  constructor() { }

  ngOnInit() {
  }

}
