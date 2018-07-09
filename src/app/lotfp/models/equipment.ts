export abstract class LotfpEquipment {
    name: string;
    cost: number;
    encumbering: boolean;
    oversized: boolean;
}

export class LotfpArmour extends LotfpEquipment {
    baseAc: number;
    encumberancePoints: number;
}

export class LotfpWeapon extends LotfpEquipment {
    attackDiceCount: number;
    attackDiceSize: number;
    specialAttachRules: boolean;
}

export class LotfpRangedWeapon extends LotfpWeapon {
    shortRange: number;
    mediumRange: number;
    longRange: number;
}

// Armour list
export const armourList: LotfpArmour[] = [
    { name: 'Leather armour', cost: 25, baseAc: 14, encumberancePoints: 0, encumbering: false, oversized: false },
    { name: 'Chain armour', cost: 100, baseAc: 16, encumberancePoints: 1, encumbering: false, oversized: false },
    { name: 'Plate armour', cost: 1000, baseAc: 18, encumberancePoints: 2, encumbering: false, oversized: false }
];

// Shield list
export const shieldList: LotfpArmour[] = [
    { name: 'Leather shield', cost: 250, baseAc: 14, encumberancePoints: 0, encumbering: true, oversized: false },
    { name: 'Chain shield', cost: 500, baseAc: 16, encumberancePoints: 0, encumbering: true, oversized: false },
    { name: 'Plate shield', cost: 1000, baseAc: 18, encumberancePoints: 0, encumbering: true, oversized: false }
];

// Melee weapon list
export const meleeWeaponList: LotfpWeapon[] = [
    { name: 'Cestus', cost: 10, attackDiceCount: 1, attackDiceSize: 3, specialAttachRules: false, encumbering: true, oversized: false },
    { name: 'Garrote', cost: 5, attackDiceCount: 1, attackDiceSize: 6, specialAttachRules: false, encumbering: true, oversized: false },
    { name: 'Lance', cost: 30, attackDiceCount: 1, attackDiceSize: 10, specialAttachRules: false, encumbering: true, oversized: false },
    { name: 'Mancatcher', cost: 20, attackDiceCount: 1, attackDiceSize: 6, specialAttachRules: true, encumbering: true, oversized: false },
    { name: 'Polearm', cost: 30, attackDiceCount: 1, attackDiceSize: 8, specialAttachRules: false, encumbering: true, oversized: false },
    { name: 'Rapier', cost: 15, attackDiceCount: 1, attackDiceSize: 8, specialAttachRules: false, encumbering: true, oversized: false },
    { name: 'Spear', cost: 5, attackDiceCount: 1, attackDiceSize: 6, specialAttachRules: false, encumbering: true, oversized: false },
    { name: 'Staff', cost: 5, attackDiceCount: 1, attackDiceSize: 4, specialAttachRules: false, encumbering: true, oversized: false },
    { name: 'Great weapon', cost: 50, attackDiceCount: 1, attackDiceSize: 10, specialAttachRules: false, encumbering: true, oversized: false },
    { name: 'Medium weapon', cost: 20, attackDiceCount: 1, attackDiceSize: 8, specialAttachRules: false, encumbering: true, oversized: false },
    { name: 'Small weapon', cost: 10, attackDiceCount: 1, attackDiceSize: 6, specialAttachRules: false, encumbering: true, oversized: false },
    { name: 'Whip', cost: 10, attackDiceCount: 1, attackDiceSize: 3, specialAttachRules: false, encumbering: true, oversized: false }
];

// Ranged weapons
export const rangedWeaponList: LotfpRangedWeapon[] = [
    { name: 'Blowgun', cost: 5, attackDiceCount: 1, attackDiceSize: 4, shortRange: 20, mediumRange: 50, longRange: 80, specialAttachRules: false, encumbering: true, oversized: false },
    { name: 'Bow, long', cost: 45, attackDiceCount: 1, attackDiceSize: 6, shortRange: 50, mediumRange: 600, longRange: 900, specialAttachRules: false, encumbering: true, oversized: true },
    { name: 'Bow, short', cost: 25, attackDiceCount: 1, attackDiceSize: 6, shortRange: 50, mediumRange: 300, longRange: 450, specialAttachRules: false, encumbering: true, oversized: false },
    { name: 'Crossbow, Heavy', cost: 30, attackDiceCount: 1, attackDiceSize: 8, shortRange: 50, mediumRange: 200, longRange: 600, specialAttachRules: false, encumbering: true, oversized: true },
    { name: 'Crossbow, Light', cost: 25, attackDiceCount: 1, attackDiceSize: 6, shortRange: 50, mediumRange: 150, longRange: 400, specialAttachRules: false, encumbering: true, oversized: false },
    { name: 'Rock', cost: 0, attackDiceCount: 1, attackDiceSize: 2, shortRange: 10, mediumRange: 20, longRange: 30, specialAttachRules: false, encumbering: true, oversized: false },
    { name: 'Sling', cost: 5, attackDiceCount: 1, attackDiceSize: 4, shortRange: 50, mediumRange: 300, longRange: 450, specialAttachRules: false, encumbering: true, oversized: false },
    { name: 'Dart', cost: 1, attackDiceCount: 1, attackDiceSize: 4, shortRange: 10, mediumRange: 20, longRange: 30, specialAttachRules: false, encumbering: true, oversized: false },
    { name: 'Spear', cost: 5, attackDiceCount: 1, attackDiceSize: 6, shortRange: 10, mediumRange: 20, longRange: 60, specialAttachRules: false, encumbering: true, oversized: false }
];

// Projectiles
export const projectileList: LotfpEquipment[] = [
    { name: 'Arrow', cost: 5, encumbering: false, oversized: false },
    { name: 'Crossbow bolt', cost: 5, encumbering: false, oversized: false },
    { name: 'Sling bullet', cost: 2, encumbering: false, oversized: false }
];

// Animals
export const animalsList: LotfpEquipment[] = [
    { name: 'Carrier pigeon', cost: 1, encumbering: false, oversized: false },
    { name: 'Horse, riding', cost: 100, encumbering: false, oversized: false },
    { name: 'Horse, war', cost: 500, encumbering: false, oversized: false },
    { name: 'Livestock', cost: 10, encumbering: false, oversized: false },
    { name: 'Mule', cost: 50, encumbering: false, oversized: false },
    { name: 'Pony', cost: 75, encumbering: false, oversized: false }
];

export const containersList: LotfpEquipment[] = [
    { name: 'Backpack', cost: 3, encumbering: false, oversized: false },
    { name: 'Barrel', cost: 1, encumbering: true, oversized: true },
    { name: 'Chest', cost: 10, encumbering: true, oversized: true },
    { name: 'Pouch', cost: 0.01, encumbering: true, oversized: false },
    { name: 'Quiver', cost: 5, encumbering: true, oversized: false },
    { name: 'Sack', cost: 0.01, encumbering: false, oversized: false },
    { name: 'Saddlebag', cost: 1, encumbering: false, oversized: false }
];

export const vehicleList: LotfpEquipment[] = [
    { name: 'Cart', cost: 50, encumbering: false, oversized: false },
    { name: 'Coach', cost: 500, encumbering: false, oversized: false },
    { name: 'Wagon', cost: 150, encumbering: false, oversized: false },
    { name: 'Chariot', cost: 250, encumbering: false, oversized: false },
    { name: 'Boat, Raft', cost: 5, encumbering: false, oversized: false },
    { name: 'Boat, Canoe', cost: 30, encumbering: false, oversized: false },
    { name: 'Boat, Lifeboat', cost: 100, encumbering: false, oversized: false },
    { name: 'Ship, Trimeme', cost: 10000, encumbering: false, oversized: false },
    { name: 'Ship, Quadrireme', cost: 30000, encumbering: false, oversized: false },
    { name: 'Ship, River galley', cost: 4000, encumbering: false, oversized: false },
    { name: 'Ship, Riverboat', cost: 1000, encumbering: false, oversized: false },
    { name: 'Ship, Sailboat', cost: 6000, encumbering: false, oversized: false },
    { name: 'Ship, Cog', cost: 15000, encumbering: false, oversized: false },
    { name: 'Ship, Caraval', cost: 39000, encumbering: false, oversized: false },
    { name: 'Ship, Galleon', cost: 60000, encumbering: false, oversized: false },
    { name: 'Ship, Cutter', cost: 45000, encumbering: false, oversized: false },
    { name: 'Ship, Brig', cost: 90000, encumbering: false, oversized: false },
    { name: 'Ship, Corvette', cost: 135000, encumbering: false, oversized: false },
    { name: 'Ship, Frigate', cost: 180000, encumbering: false, oversized: false }
];

export const foodList: LotfpEquipment[] = [
    { name: 'Bottle of wine/liqour, poor', cost: 0.01, encumbering: true, oversized: false },
    { name: 'Bottle of wine/liqour, decent', cost: 1, encumbering: true, oversized: false },
    { name: 'Bottle of wine/liqour, rich', cost: 10, encumbering: true, oversized: false },
    { name: 'Drink, cheap', cost: 0.01, encumbering: true, oversized: false },
    { name: 'Drink, decent', cost: 0.05, encumbering: true, oversized: false },
    { name: 'Drink, good', cost: 0.1, encumbering: true, oversized: false },
    { name: 'Drink, rich', cost: 15, encumbering: true, oversized: false },
    { name: 'Meal, fancy', cost: 1, encumbering: true, oversized: false },
    { name: 'Meal, horrid', cost: 0.01, encumbering: true, oversized: false },
    { name: 'Meal, standard', cost: 0.1, encumbering: true, oversized: false },
    { name: 'Meal, rich', cost: 15, encumbering: true, oversized: false },
    { name: 'Rations, iron/day', cost: 2, encumbering: true, oversized: false },
    { name: 'Rations, standard/day', cost: 1, encumbering: true, oversized: false },
    { name: 'Feed, animal/day', cost: 1, encumbering: true, oversized: false }
];

export const miscList: LotfpEquipment[] = [
    { name: 'Air bladder', cost: 1, encumbering: false, oversized: false },
    { name: 'Bedroll', cost: 2, encumbering: true, oversized: false },
    { name: 'Block and tackle', cost: 2, encumbering: true, oversized: false },
    { name: 'Book, blank', cost: 5, encumbering: true, oversized: false },
    { name: 'Book, reading', cost: 10, encumbering: true, oversized: false },
    { name: 'Book, spell(blank)', cost: 100, encumbering: true, oversized: false },
    { name: 'Caltrop', cost: 5, encumbering: true, oversized: false },
    { name: 'Candle', cost: 0.01, encumbering: false, oversized: false },
    { name: 'Chain, per foot', cost: 1, encumbering: true, oversized: false },
    { name: 'Chalk', cost: 1, encumbering: false, oversized: false },
    { name: 'Clothing, extravigant', cost: 20, encumbering: true, oversized: false },
    { name: 'Clothing, normal', cost: 5, encumbering: false, oversized: false },
    { name: 'Clothing, poor', cost: 1, encumbering: false, oversized: false },
    { name: 'Clothing, winter travel', cost: 10, encumbering: true, oversized: false },
    { name: 'Cooking pots', cost: 1, encumbering: true, oversized: false },
    { name: 'Crampons', cost: 5, encumbering: true, oversized: false },
    { name: 'Crowbar', cost: 2, encumbering: true, oversized: false },
    { name: 'Drill', cost: 5, encumbering: true, oversized: false },
    { name: 'Fishing gear', cost: 1, encumbering: true, oversized: false },
    { name: 'Flask of lamp oil', cost: 5, encumbering: true, oversized: false },
    { name: 'Garlic', cost: 0.01, encumbering: false, oversized: false },
    { name: 'Gem', cost: 5, encumbering: false, oversized: false },
    { name: 'Grappling hook', cost: 5, encumbering: true, oversized: false },
    { name: 'Holy symbol, silver', cost: 25, encumbering: false, oversized: false },
    { name: 'Holy symbol, steel', cost: 10, encumbering: false, oversized: false },
    { name: 'Holy symbol, wood', cost: 1, encumbering: false, oversized: false },
    { name: 'Holy water', cost: 25, encumbering: true, oversized: false },
    { name: 'Hourglass', cost: 100, encumbering: true, oversized: false },
    { name: 'Ink', cost: 0.01, encumbering: false, oversized: false },
    { name: 'Instrument', cost: 1, encumbering: true, oversized: false },
    { name: 'Jewlery', cost: 10, encumbering: false, oversized: false },
    { name: 'Ladder 10\'', cost: 10, encumbering: true, oversized: true },
    { name: 'Lantern 3', cost: 0, encumbering: true, oversized: false },
    { name: 'Lard', cost: 3, encumbering: true, oversized: false },
    { name: 'Lock', cost: 7, encumbering: true, oversized: false },
    { name: 'Mallet', cost: 3, encumbering: true, oversized: false },
    { name: 'Manacles', cost: 10, encumbering: true, oversized: false },
    { name: 'Map, kingdom', cost: 10, encumbering: false, oversized: false },
    { name: 'Map, local', cost: 10, encumbering: false, oversized: false },
    { name: 'Mirror, glass', cost: 10, encumbering: true, oversized: false },
    { name: 'Mirror, silver', cost: 30, encumbering: false, oversized: false },
    { name: 'Mirror, steel', cost: 1, encumbering: false, oversized: false },
    { name: 'Nails', cost: 0.01, encumbering: false, oversized: false },
    { name: 'Paper', cost: 0.02, encumbering: false, oversized: false },
    { name: 'Pick, miners', cost: 6, encumbering: true, oversized: false },
    { name: 'Pipe', cost: 1, encumbering: false, oversized: false },
    { name: 'Pole, 10\'', cost: 1, encumbering: true, oversized: true },
    { name: 'Riding gear', cost: 25, encumbering: true, oversized: true },
    { name: 'Rope, 50', cost: 3, encumbering: true, oversized: false },
    { name: 'Scroll case', cost: 1, encumbering: true, oversized: false },
    { name: 'Shovel', cost: 3, encumbering: true, oversized: false },
    { name: 'Soap', cost: 0.01, encumbering: false, oversized: false },
    { name: 'Specialist\'s tools', cost: 50, encumbering: true, oversized: false },
    { name: 'Spike, iron', cost: 0.02, encumbering: false, oversized: false },
    { name: 'Spike, wood', cost: 0.01, encumbering: false, oversized: false },
    { name: 'Spyglass', cost: 250, encumbering: true, oversized: false },
    { name: 'Tent, grand', cost: 25, encumbering: true, oversized: true },
    { name: 'Tent, pavillion', cost: 50, encumbering: true, oversized: true },
    { name: 'Tent, personal', cost: 5, encumbering: true, oversized: true },
    { name: 'Tent, regular', cost: 10, encumbering: true, oversized: true },
    { name: 'Tinderbox', cost: 1, encumbering: true, oversized: false },
    { name: 'Tabacco', cost: 1, encumbering: true, oversized: false },
    { name: 'Torch', cost: 0.01, encumbering: true, oversized: false },
    { name: 'Vial or bottle, empty', cost: 0.1, encumbering: false, oversized: false },
    { name: 'Waterskin', cost: 1, encumbering: true, oversized: false },
    { name: 'Whistle', cost: 1, encumbering: false, oversized: false },
    { name: 'Wolvesbane', cost: 1, encumbering: false, oversized: false }
];
