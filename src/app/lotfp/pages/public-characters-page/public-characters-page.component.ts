import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { LotfpCharacter } from '../../models/models';

@Component({
  selector: 'public-characters-page',
  templateUrl: './public-characters-page.component.html',
  styleUrls: ['./public-characters-page.component.scss']
})
export class PublicCharactersPageComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
