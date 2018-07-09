import { Component, OnInit, Input } from '@angular/core';
import { LotfpCharacter } from '../../models/models';

@Component({
  selector: 'character-creator-progress',
  templateUrl: './character-creator-progress.component.html',
  styleUrls: ['./character-creator-progress.component.scss']
})
export class CharacterCreatorProgressComponent implements OnInit {
  @Input() step = '';
  @Input() character: LotfpCharacter;

  constructor() { }

  ngOnInit() {
  }

}
