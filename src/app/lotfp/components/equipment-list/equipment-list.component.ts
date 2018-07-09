import { Component, OnInit, Input } from '@angular/core';
import { LotfpCharacter } from '../../models/models';
import { armourList, LotfpEquipment, LotfpArmour, shieldList, LotfpWeapon, LotfpRangedWeapon, meleeWeaponList, rangedWeaponList, animalsList, containersList, vehicleList, foodList, miscList, projectileList } from '../../models/equipment';
import { CharacterService } from '../../services/character.service';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.scss']
})
export class EquipmentListComponent implements OnInit {
  @Input() character: LotfpCharacter = {};
  currentTab = 'armour';

  armourList: LotfpArmour[] = [];
  shieldList: LotfpArmour[] = [];
  meleeWeaponsList: LotfpWeapon[] = [];
  rangedWeaponsList: LotfpRangedWeapon[] = [];
  projectileList: LotfpEquipment[] = [];
  animalsList: LotfpEquipment[] = [];
  containersList: LotfpEquipment[] = [];
  vehiclesList: LotfpEquipment[] = [];
  foodList: LotfpEquipment[] = [];
  miscList: LotfpEquipment[] = [];

  constructor(private characterService: CharacterService, private toast: ToastyService) { }

  ngOnInit() {
    this.armourList = armourList;
    this.shieldList = shieldList;
    this.meleeWeaponsList = meleeWeaponList;
    this.rangedWeaponsList = rangedWeaponList;
    this.projectileList = projectileList;
    this.animalsList = animalsList;
    this.containersList = containersList;
    this.vehiclesList = vehicleList;
    this.foodList = foodList;
    this.miscList = miscList;
  }

  changeTab(tabName: string) {
    this.currentTab = tabName;
  }

  addArmour(item: LotfpArmour) {
    // Can the user afford it
    if (this.character.silver < item.cost) { return; }
    // Does the character already have armour
    if (this.character.armour) { return; }

    // Add the armour
    this.characterService.updateValues(this.character.id, { armour: item, silver: (this.character.silver - item.cost) });
    this.characterService.recalculateArmourClass(this.character.id);
    this.toast.info({ msg: `Added <b>${item.name}</b>`, title: 'Armour added' });
  }

  addShield(item: LotfpArmour) {
    // Can the user afford it
    if (this.character.silver < item.cost) { return; }
    // Does the character already have armour
    if (this.character.shield) { return; }

    // Add the armour
    this.characterService.updateValues(this.character.id, { shield: item, silver: (this.character.silver - item.cost) });
    this.characterService.recalculateArmourClass(this.character.id);
    this.toast.info({ msg: `Added <b>${item.name}</b>`, title: 'Shield added' });
  }

  addWeapon(item: LotfpWeapon) {
    // Can the user afford it
    if (this.character.silver < item.cost) { return; }

    // Get the characters weapons
    let charWeapons: LotfpWeapon[] = this.character.weapons;
    if (!charWeapons) {
      charWeapons = [];
    }

    // Add the new weapon
    charWeapons.push(item);

    // Add the armour
    this.characterService.updateValues(this.character.id, { weapons: charWeapons, silver: (this.character.silver - item.cost) });
    this.characterService.recalculateEncumberance(this.character.id);
    this.toast.info({ msg: `Added <b>${item.name}</b>`, title: 'Weapon melee added' });
  }

  addRangedWeapon(item: LotfpRangedWeapon) {
    // Can the user afford it
    if (this.character.silver < item.cost) { return; }

    // Get the characters weapons
    let charWeapons: LotfpRangedWeapon[] = this.character.rangedWeapons;
    if (!charWeapons) {
      charWeapons = [];
    }

    // Add the new weapon
    charWeapons.push(item);

    // Add the armour
    this.characterService.updateValues(this.character.id, { rangedWeapons: charWeapons, silver: (this.character.silver - item.cost) });
    this.characterService.recalculateEncumberance(this.character.id);
    this.toast.info({ msg: `Added <b>${item.name}</b>`, title: 'Weapon ranged added' });
  }

  addEquipment(item: LotfpEquipment) {
    // Can the user afford it
    if (this.character.silver < item.cost) { return; }

    // Get the characters weapons
    let charEquipment: LotfpEquipment[] = this.character.equipment;
    if (!charEquipment) {
      charEquipment = [];
    }

    // Add the new weapon
    charEquipment.push(item);

    // Add the armour
    this.characterService.updateValues(this.character.id, { equipment: charEquipment, silver: (this.character.silver - item.cost) });
    this.characterService.recalculateEncumberance(this.character.id);
    this.toast.info(`${item.name} added`);
  }

}
