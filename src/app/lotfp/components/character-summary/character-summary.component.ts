import { Component, OnInit, Input } from '@angular/core';
import { LotfpCharacter } from '../../models/models';
import { CharacterService } from '../../services/character.service';
import { LotfpArmour, LotfpWeapon, LotfpEquipment } from '../../models/equipment';
import { LotfpSpell } from '../../models/spells';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'character-summary',
  templateUrl: './character-summary.component.html',
  styleUrls: ['./character-summary.component.scss']
})
export class CharacterSummaryComponent implements OnInit {
  @Input() character: LotfpCharacter = {};

  constructor(private characterService: CharacterService, private toast: ToastyService) { }

  ngOnInit() {
  }

  sellArmour() {
    this.characterService.updateValues(this.character.id, { armour: null, silver: this.character.silver + this.character.armour.cost });
    this.characterService.recalculateArmourClass(this.character.id);
    this.toast.warning({ msg: 'Armour has been removed, your AC has changed', title: 'Armour removed'});
  }

  sellShield() {
    this.characterService.updateValues(this.character.id, { shield: null, silver: this.character.silver + this.character.shield.cost });
    this.characterService.recalculateArmourClass(this.character.id);
    this.toast.warning({ msg: 'Shield has been removed, your AC has changed', title: 'Shield removed'});
  }

  sellWeapon(name: string) {
    const charWeapons = this.character.weapons;
    const index = charWeapons.findIndex(w => w.name === name);
    const item: LotfpWeapon = charWeapons[index];
    charWeapons.splice(index, 1);

    this.characterService.updateValues(this.character.id, { weapons: charWeapons, silver: this.character.silver + item.cost });
    this.characterService.recalculateEncumberance(this.character.id);
    this.toast.warning({ msg: `${name} has been removed`, title: 'Weapon removed'});
  }

  sellRangedWeapon(name: string) {
    const charWeapons = this.character.rangedWeapons;
    const index = charWeapons.findIndex(w => w.name === name);
    const item: LotfpWeapon = charWeapons[index];
    charWeapons.splice(index, 1);

    this.characterService.updateValues(this.character.id, { rangedWeapons: charWeapons, silver: this.character.silver + item.cost });
    this.characterService.recalculateEncumberance(this.character.id);
    this.toast.warning({ msg: `${name} has been removed`, title: 'Weapon removed'});
  }

  sellEquipment(name: string) {
    const charEquipment = this.character.equipment;
    const index = charEquipment.findIndex(e => e.name === name);
    const item: LotfpEquipment = charEquipment[index];
    charEquipment.splice(index, 1);

    this.characterService.updateValues(this.character.id, { equipment: charEquipment, silver: this.character.silver + item.cost });
    this.characterService.recalculateEncumberance(this.character.id);
    this.toast.warning({ msg: `${name} has been removed`, title: 'Equipment removed'});
  }

  removeSpell(spell: LotfpSpell) {
    const spellList = this.character.spells;
    const index = spellList.findIndex(s => s.name === spell.name && s.level === spell.level);
    spellList.splice(index, 1);

    // Update the database
    this.characterService.updateValues(this.character.id, { spells: spellList });
    this.toast.warning({ msg: `${spell.name} has been removed`, title: 'Spell removed'});
  }
}
