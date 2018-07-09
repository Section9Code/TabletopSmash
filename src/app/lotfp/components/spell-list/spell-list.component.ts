import { Component, OnInit, Input, OnChanges, OnDestroy, Output, EventEmitter } from '@angular/core';
import { LotfpSpell } from '../../models/spells';
import { LotfpCharacter } from '../../models/models';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Subscription } from 'rxjs';

@Component({
  selector: 'spell-list',
  templateUrl: './spell-list.component.html',
  styleUrls: ['./spell-list.component.scss']
})
export class SpellListComponent implements OnInit, OnDestroy {
  @Input() spells: BehaviorSubject<LotfpSpell[]>;
  @Input() levelToShow = 1;
  @Input() character: LotfpCharacter = {};

  @Output() spellSelected: EventEmitter<LotfpSpell>;

  // Spells to display to the user
  displaySpells: LotfpSpell[] = [];

  // Show the select option
  showSelect = false;

  // Subscription to the list of spells
  subSpells: Subscription;

  constructor() {
    this.spellSelected = new EventEmitter<LotfpSpell>();
  }

  ngOnInit() {
    this.subSpells = this.spells.subscribe(response => {
      this.displaySpells = response.filter(s => s.level === this.levelToShow);
      if (this.character[`level${this.levelToShow}Spells`] > 0) { this.showSelect = true; }
    });
  }

  ngOnDestroy() {
    this.subSpells.unsubscribe();
  }

  selectSpell(spell: LotfpSpell) {
    this.spellSelected.emit(spell);
  }
}
