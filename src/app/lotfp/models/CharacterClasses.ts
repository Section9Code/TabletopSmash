
// Enumeration of all the possible ability types
export enum Ability {
    cha,
    con,
    dex,
    int,
    str,
    wis
}

// The base abstract for all character classes
export interface LotfpCharacterClass {
    name: string;
    description: string;
    keyAbilities: Ability[];
    minHitPoints: number;
    characterAbilities: LotfpClassFeaturesDetails[];
    characterSkills: LotfpClassSkills[];
    surpriseChance: number;
    enhancedCombatOptions: boolean;
}

// Class features
export interface LotfpClassFeaturesDetails {
    level: number;
    experience: number;
    hitPointsDiceSize?: number;
    hitPointsAmount?: number;
    constitutionModApplies?: boolean;
    savingThrows: LotfpCharacterSavingThrows;
    attackBonus: number;
    skillPoints: number;

    level1Spells: number;
    level2Spells: number;
    level3Spells: number;
    level4Spells: number;
    level5Spells: number;
    level6Spells: number;
    level7Spells: number;
    level8Spells: number;
    level9Spells: number;
}

export class LotfpCharacterSavingThrows {
    paralyze: number;
    poison: number;
    breath: number;
    device: number;
    magic: number;
}

export class LotfpClassSkills {
    architecture: number;
    bushcraft: number;
    climbing: number;
    languages: number;
    openDoors: number;
    search: number;
    sleightOfHand: number;
    sneakAttack: number;
    stealth: number;
    tinkering: number;
}

export const FighterSavingThrows: LotfpCharacterSavingThrows[] = [
    { paralyze: 16, poison: 16, breath: 16, device: 15, magic: 18 },        // 0: Level 0
    { paralyze: 14, poison: 12, breath: 15, device: 13, magic: 16 },        // 1: Level 1-3
    { paralyze: 12, poison: 10, breath: 13, device: 11, magic: 14 },        // 2: Level 4-6
    { paralyze: 10, poison: 8, breath: 9, device: 9, magic: 12 },           // 3: Level 7-9
    { paralyze: 8, poison: 6, breath: 7, device: 7, magic: 10 },            // 4: Level 10-12
    { paralyze: 6, poison: 4, breath: 5, device: 5, magic: 8 }              // 5: Level 13+
];

export const FighterSkills: LotfpClassSkills[] = [
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 }
];

export const ClericSavingThrows: LotfpCharacterSavingThrows[] = [
    { paralyze: 16, poison: 16, breath: 16, device: 15, magic: 18 },        // 0: Level 0
    { paralyze: 14, poison: 11, breath: 16, device: 12, magic: 15 },        // 1: Level 1-4
    { paralyze: 12, poison: 9, breath: 14, device: 10, magic: 12 },         // 2: Level 5-8
    { paralyze: 10, poison: 7, breath: 12, device: 8, magic: 9 },           // 3: Level 9-12
    { paralyze: 8, poison: 3, breath: 8, device: 4, magic: 6 },             // 4: Level 13-16
    { paralyze: 6, poison: 2, breath: 6, device: 4, magic: 5 }              // 5: Level 17+
];

export const ClericSkills: LotfpClassSkills[] = [
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 }
];

export const MagicUserSavingThrows: LotfpCharacterSavingThrows[] = [
    { paralyze: 13, poison: 13, breath: 16, device: 13, magic: 14 },        // 0: Level 1-5
    { paralyze: 11, poison: 11, breath: 14, device: 11, magic: 12 },        // 1: Level 6-10
    { paralyze: 9, poison: 9, breath: 12, device: 9, magic: 8 },            // 2: Level 11-15
    { paralyze: 6, poison: 7, breath: 8, device: 5, magic: 6 },             // 3: Level 16-18
    { paralyze: 5, poison: 6, breath: 7, device: 4, magic: 4 }              // 4: Level 19+
];

export const MagicUserSkills: LotfpClassSkills[] = [
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 }
];

export const SpecialistSavingThrows: LotfpCharacterSavingThrows[] = [
    { paralyze: 14, poison: 16, breath: 15, device: 14, magic: 14 },        // 0: Level 1-4
    { paralyze: 11, poison: 12, breath: 14, device: 13, magic: 12 },        // 1: Level 5-8
    { paralyze: 9, poison: 10, breath: 12, device: 11, magic: 10 },        // 2: Level 9-12
    { paralyze: 7, poison: 8, breath: 10, device: 9, magic: 8 },         // 3: Level 13-16
    { paralyze: 5, poison: 6, breath: 8, device: 7, magic: 6 }          // 4: Level 17+
];

export const SpecialistSkills: LotfpClassSkills[] = [
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
];

export const DwarfSavingThrows: LotfpCharacterSavingThrows[] = [
    { paralyze: 10, poison: 8, breath: 13, device: 9, magic: 12 },        // 0: Level 1-3
    { paralyze: 8, poison: 6, breath: 10, device: 7, magic: 10 },        // 1: Level 4-6
    { paralyze: 6, poison: 4, breath: 7, device: 5, magic: 8 },         // 2: Level 7-9
    { paralyze: 4, poison: 2, breath: 4, device: 3, magic: 6 },         // 3: Level 10-11
    { paralyze: 2, poison: 2, breath: 2, device: 2, magic: 4 }         // 4: Level 12+
];

export const DwarfSkills: LotfpClassSkills[] = [
    { architecture: 3, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 3, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 3, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 3, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 4, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 4, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 4, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 5, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 5, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 5, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 6, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 6, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 6, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
];

export const ElfSavingThrows: LotfpCharacterSavingThrows[] = [
    { paralyze: 13, poison: 12, breath: 15, device: 13, magic: 15 },        // 0: Level 1-3
    { paralyze: 11, poison: 10, breath: 13, device: 11, magic: 13 },        // 1: Level 4-6
    { paralyze: 9, poison: 8, breath: 9, device: 9, magic: 11 },        // 2: Level 7-9
    { paralyze: 7, poison: 6, breath: 7, device: 7, magic: 9 },         // 3: Level 10-12
    { paralyze: 5, poison: 4, breath: 5, device: 5, magic: 7 },         // 4: Level 13-16
    { paralyze: 3, poison: 3, breath: 3, device: 3, magic: 5 }          // 4: Level 17+
];

export const ElfSkills: LotfpClassSkills[] = [
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 2, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 2, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 2, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 3, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 3, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 3, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 4, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 4, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 4, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 5, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 5, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 5, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 6, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 6, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 6, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 6, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 1, climbing: 1, languages: 1, openDoors: 1, search: 6, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
];

export const HalflingSavingThrows: LotfpCharacterSavingThrows[] = [
    { paralyze: 10, poison: 8, breath: 13, device: 9, magic: 12 },        // 0: Level 1
    { paralyze: 8, poison: 6, breath: 10, device: 7, magic: 10 },        // 1: Level 2-3
    { paralyze: 6, poison: 4, breath: 7, device: 5, magic: 8 },         // 2: Level 4-5
    { paralyze: 4, poison: 2, breath: 4, device: 3, magic: 6 },         // 3: Level 6-7
    { paralyze: 2, poison: 2, breath: 2, device: 2, magic: 4 },         // 4: Level 8+
];

export const HalflingSkills: LotfpClassSkills[] = [
    { architecture: 1, bushcraft: 3, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 3, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 3, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 4, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 4, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 4, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 5, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 5, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 5, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
    { architecture: 1, bushcraft: 6, climbing: 1, languages: 1, openDoors: 1, search: 1, sleightOfHand: 1, sneakAttack: 1, stealth: 1, tinkering: 1 },
];

/////////////////////////////////////////////////////////////////////
// C H A R A C T E R    C L A S S E S ///////////////////////////////
// FIGHTER //////////////////////////////////////////////////////////
export const FighterCharacterClass: LotfpCharacterClass = {
    name: 'Fighter',
    description: 'Fighter description',
    keyAbilities: [Ability.str],
    minHitPoints: 8,
    characterAbilities: [
        { level: 1, experience: 0, hitPointsDiceSize: 8, constitutionModApplies: true, savingThrows: FighterSavingThrows[1], attackBonus: 2, skillPoints: 0, level1Spells: 0, level2Spells: 0, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 2, experience: 0, hitPointsDiceSize: 8, constitutionModApplies: true, savingThrows: FighterSavingThrows[1], attackBonus: 3, skillPoints: 0, level1Spells: 0, level2Spells: 0, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 3, experience: 0, hitPointsDiceSize: 8, constitutionModApplies: true, savingThrows: FighterSavingThrows[1], attackBonus: 4, skillPoints: 0, level1Spells: 0, level2Spells: 0, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 4, experience: 0, hitPointsDiceSize: 8, constitutionModApplies: true, savingThrows: FighterSavingThrows[2], attackBonus: 5, skillPoints: 0, level1Spells: 0, level2Spells: 0, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 5, experience: 0, hitPointsDiceSize: 8, constitutionModApplies: true, savingThrows: FighterSavingThrows[2], attackBonus: 6, skillPoints: 0, level1Spells: 0, level2Spells: 0, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 6, experience: 0, hitPointsDiceSize: 8, constitutionModApplies: true, savingThrows: FighterSavingThrows[2], attackBonus: 7, skillPoints: 0, level1Spells: 0, level2Spells: 0, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 7, experience: 0, hitPointsDiceSize: 8, constitutionModApplies: true, savingThrows: FighterSavingThrows[3], attackBonus: 8, skillPoints: 0, level1Spells: 0, level2Spells: 0, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 8, experience: 0, hitPointsDiceSize: 8, constitutionModApplies: true, savingThrows: FighterSavingThrows[3], attackBonus: 9, skillPoints: 0, level1Spells: 0, level2Spells: 0, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 9, experience: 0, hitPointsDiceSize: 8, constitutionModApplies: true, savingThrows: FighterSavingThrows[3], attackBonus: 10, skillPoints: 0, level1Spells: 0, level2Spells: 0, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 10, experience: 0, hitPointsAmount: 3, constitutionModApplies: false, savingThrows: FighterSavingThrows[4], attackBonus: 10, skillPoints: 0, level1Spells: 0, level2Spells: 0, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 11, experience: 0, hitPointsAmount: 3, constitutionModApplies: false, savingThrows: FighterSavingThrows[4], attackBonus: 10, skillPoints: 0, level1Spells: 0, level2Spells: 0, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 12, experience: 0, hitPointsAmount: 3, constitutionModApplies: false, savingThrows: FighterSavingThrows[4], attackBonus: 10, skillPoints: 0, level1Spells: 0, level2Spells: 0, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 13, experience: 0, hitPointsAmount: 3, constitutionModApplies: false, savingThrows: FighterSavingThrows[5], attackBonus: 10, skillPoints: 0, level1Spells: 0, level2Spells: 0, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
    ],
    characterSkills: FighterSkills,
    surpriseChance: 2,
    enhancedCombatOptions: true
};

// CLERIC ///////////////////////////////////////////////////////////
export const ClericCharacterClass: LotfpCharacterClass = {
    name: 'Cleric',
    description: 'Cleric desc',
    keyAbilities: [Ability.int],
    minHitPoints: 4,
    characterAbilities: [
        { level: 1, experience: 0, hitPointsDiceSize: 6, constitutionModApplies: true, savingThrows: ClericSavingThrows[1], attackBonus: 1, skillPoints: 0, level1Spells: 1, level2Spells: 0, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 2, experience: 0, hitPointsDiceSize: 6, constitutionModApplies: true, savingThrows: ClericSavingThrows[1], attackBonus: 1, skillPoints: 0, level1Spells: 2, level2Spells: 0, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 3, experience: 0, hitPointsDiceSize: 6, constitutionModApplies: true, savingThrows: ClericSavingThrows[1], attackBonus: 1, skillPoints: 0, level1Spells: 3, level2Spells: 0, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 4, experience: 0, hitPointsDiceSize: 6, constitutionModApplies: true, savingThrows: ClericSavingThrows[1], attackBonus: 1, skillPoints: 0, level1Spells: 3, level2Spells: 1, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 5, experience: 0, hitPointsDiceSize: 6, constitutionModApplies: true, savingThrows: ClericSavingThrows[2], attackBonus: 1, skillPoints: 0, level1Spells: 3, level2Spells: 2, level3Spells: 1, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 6, experience: 0, hitPointsDiceSize: 6, constitutionModApplies: true, savingThrows: ClericSavingThrows[2], attackBonus: 1, skillPoints: 0, level1Spells: 3, level2Spells: 3, level3Spells: 2, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 7, experience: 0, hitPointsDiceSize: 6, constitutionModApplies: true, savingThrows: ClericSavingThrows[2], attackBonus: 1, skillPoints: 0, level1Spells: 4, level2Spells: 3, level3Spells: 3, level4Spells: 1, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 8, experience: 0, hitPointsDiceSize: 6, constitutionModApplies: true, savingThrows: ClericSavingThrows[2], attackBonus: 1, skillPoints: 0, level1Spells: 4, level2Spells: 3, level3Spells: 3, level4Spells: 2, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 9, experience: 0, hitPointsDiceSize: 6, constitutionModApplies: true, savingThrows: ClericSavingThrows[3], attackBonus: 1, skillPoints: 0, level1Spells: 4, level2Spells: 3, level3Spells: 3, level4Spells: 3, level5Spells: 1, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 10, experience: 0, hitPointsAmount: 2, constitutionModApplies: false, savingThrows: ClericSavingThrows[3], attackBonus: 1, skillPoints: 0, level1Spells: 4, level2Spells: 4, level3Spells: 3, level4Spells: 3, level5Spells: 2, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 11, experience: 0, hitPointsAmount: 2, constitutionModApplies: false, savingThrows: ClericSavingThrows[3], attackBonus: 1, skillPoints: 0, level1Spells: 5, level2Spells: 4, level3Spells: 4, level4Spells: 3, level5Spells: 3, level6Spells: 1, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 12, experience: 0, hitPointsAmount: 2, constitutionModApplies: false, savingThrows: ClericSavingThrows[3], attackBonus: 1, skillPoints: 0, level1Spells: 5, level2Spells: 4, level3Spells: 4, level4Spells: 3, level5Spells: 3, level6Spells: 2, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 13, experience: 0, hitPointsAmount: 2, constitutionModApplies: false, savingThrows: ClericSavingThrows[4], attackBonus: 1, skillPoints: 0, level1Spells: 5, level2Spells: 4, level3Spells: 4, level4Spells: 4, level5Spells: 3, level6Spells: 3, level7Spells: 1, level8Spells: 0, level9Spells: 0 },
        { level: 14, experience: 0, hitPointsAmount: 2, constitutionModApplies: false, savingThrows: ClericSavingThrows[4], attackBonus: 1, skillPoints: 0, level1Spells: 5, level2Spells: 5, level3Spells: 4, level4Spells: 4, level5Spells: 3, level6Spells: 3, level7Spells: 2, level8Spells: 0, level9Spells: 0 },
        { level: 15, experience: 0, hitPointsAmount: 2, constitutionModApplies: false, savingThrows: ClericSavingThrows[4], attackBonus: 1, skillPoints: 0, level1Spells: 6, level2Spells: 5, level3Spells: 5, level4Spells: 4, level5Spells: 4, level6Spells: 3, level7Spells: 3, level8Spells: 0, level9Spells: 0 },
        { level: 16, experience: 0, hitPointsAmount: 2, constitutionModApplies: false, savingThrows: ClericSavingThrows[4], attackBonus: 1, skillPoints: 0, level1Spells: 6, level2Spells: 5, level3Spells: 5, level4Spells: 4, level5Spells: 4, level6Spells: 3, level7Spells: 3, level8Spells: 0, level9Spells: 0 },
        { level: 17, experience: 0, hitPointsAmount: 2, constitutionModApplies: false, savingThrows: ClericSavingThrows[5], attackBonus: 1, skillPoints: 0, level1Spells: 6, level2Spells: 5, level3Spells: 5, level4Spells: 5, level5Spells: 4, level6Spells: 4, level7Spells: 3, level8Spells: 0, level9Spells: 0 },
        { level: 18, experience: 0, hitPointsAmount: 2, constitutionModApplies: false, savingThrows: ClericSavingThrows[5], attackBonus: 1, skillPoints: 0, level1Spells: 6, level2Spells: 6, level3Spells: 5, level4Spells: 5, level5Spells: 4, level6Spells: 4, level7Spells: 3, level8Spells: 0, level9Spells: 0 },
        { level: 19, experience: 0, hitPointsAmount: 2, constitutionModApplies: false, savingThrows: ClericSavingThrows[5], attackBonus: 1, skillPoints: 0, level1Spells: 7, level2Spells: 6, level3Spells: 6, level4Spells: 5, level5Spells: 5, level6Spells: 4, level7Spells: 4, level8Spells: 0, level9Spells: 0 },
        { level: 20, experience: 0, hitPointsAmount: 2, constitutionModApplies: false, savingThrows: ClericSavingThrows[5], attackBonus: 1, skillPoints: 0, level1Spells: 8, level2Spells: 7, level3Spells: 7, level4Spells: 6, level5Spells: 5, level6Spells: 5, level7Spells: 4, level8Spells: 0, level9Spells: 0 }
    ],
    characterSkills: ClericSkills,
    surpriseChance: 1,
    enhancedCombatOptions: false
};

// MAGIC USER ///////////////////////////////////////////////////////
export const MagicUserCharacterClass: LotfpCharacterClass = {
    name: 'Magic user',
    description: 'Magic user description',
    keyAbilities: [Ability.int],
    minHitPoints: 3,
    characterAbilities: [
        { level: 1, experience: 0, hitPointsDiceSize: 4, constitutionModApplies: true, savingThrows: MagicUserSavingThrows[0], attackBonus: 1, skillPoints: 0, level1Spells: 1, level2Spells: 0, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 2, experience: 0, hitPointsDiceSize: 4, constitutionModApplies: true, savingThrows: MagicUserSavingThrows[0], attackBonus: 1, skillPoints: 0, level1Spells: 2, level2Spells: 0, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 3, experience: 0, hitPointsDiceSize: 4, constitutionModApplies: true, savingThrows: MagicUserSavingThrows[0], attackBonus: 1, skillPoints: 0, level1Spells: 2, level2Spells: 1, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 4, experience: 0, hitPointsDiceSize: 4, constitutionModApplies: true, savingThrows: MagicUserSavingThrows[0], attackBonus: 1, skillPoints: 0, level1Spells: 2, level2Spells: 2, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 5, experience: 0, hitPointsDiceSize: 4, constitutionModApplies: true, savingThrows: MagicUserSavingThrows[0], attackBonus: 1, skillPoints: 0, level1Spells: 3, level2Spells: 2, level3Spells: 1, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 6, experience: 0, hitPointsDiceSize: 4, constitutionModApplies: true, savingThrows: MagicUserSavingThrows[1], attackBonus: 1, skillPoints: 0, level1Spells: 3, level2Spells: 2, level3Spells: 2, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 7, experience: 0, hitPointsDiceSize: 4, constitutionModApplies: true, savingThrows: MagicUserSavingThrows[1], attackBonus: 1, skillPoints: 0, level1Spells: 3, level2Spells: 3, level3Spells: 2, level4Spells: 1, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 8, experience: 0, hitPointsDiceSize: 4, constitutionModApplies: true, savingThrows: MagicUserSavingThrows[1], attackBonus: 1, skillPoints: 0, level1Spells: 4, level2Spells: 3, level3Spells: 2, level4Spells: 2, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 9, experience: 0, hitPointsDiceSize: 4, constitutionModApplies: true, savingThrows: MagicUserSavingThrows[1], attackBonus: 1, skillPoints: 0, level1Spells: 4, level2Spells: 3, level3Spells: 3, level4Spells: 2, level5Spells: 1, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 10, experience: 0, hitPointsAmount: 1, constitutionModApplies: false, savingThrows: MagicUserSavingThrows[1], attackBonus: 1, skillPoints: 0, level1Spells: 4, level2Spells: 4, level3Spells: 3, level4Spells: 2, level5Spells: 2, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 11, experience: 0, hitPointsAmount: 1, constitutionModApplies: false, savingThrows: MagicUserSavingThrows[2], attackBonus: 1, skillPoints: 0, level1Spells: 5, level2Spells: 4, level3Spells: 3, level4Spells: 3, level5Spells: 2, level6Spells: 1, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 12, experience: 0, hitPointsAmount: 1, constitutionModApplies: false, savingThrows: MagicUserSavingThrows[2], attackBonus: 1, skillPoints: 0, level1Spells: 5, level2Spells: 4, level3Spells: 4, level4Spells: 3, level5Spells: 2, level6Spells: 2, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 13, experience: 0, hitPointsAmount: 1, constitutionModApplies: false, savingThrows: MagicUserSavingThrows[2], attackBonus: 1, skillPoints: 0, level1Spells: 5, level2Spells: 5, level3Spells: 4, level4Spells: 3, level5Spells: 3, level6Spells: 2, level7Spells: 1, level8Spells: 0, level9Spells: 0 },
        { level: 14, experience: 0, hitPointsAmount: 1, constitutionModApplies: false, savingThrows: MagicUserSavingThrows[2], attackBonus: 1, skillPoints: 0, level1Spells: 6, level2Spells: 5, level3Spells: 4, level4Spells: 4, level5Spells: 3, level6Spells: 2, level7Spells: 2, level8Spells: 0, level9Spells: 0 },
        { level: 15, experience: 0, hitPointsAmount: 1, constitutionModApplies: false, savingThrows: MagicUserSavingThrows[2], attackBonus: 1, skillPoints: 0, level1Spells: 6, level2Spells: 5, level3Spells: 5, level4Spells: 4, level5Spells: 3, level6Spells: 3, level7Spells: 2, level8Spells: 1, level9Spells: 0 },
        { level: 16, experience: 0, hitPointsAmount: 1, constitutionModApplies: false, savingThrows: MagicUserSavingThrows[3], attackBonus: 1, skillPoints: 0, level1Spells: 6, level2Spells: 6, level3Spells: 5, level4Spells: 4, level5Spells: 4, level6Spells: 3, level7Spells: 2, level8Spells: 2, level9Spells: 0 },
        { level: 17, experience: 0, hitPointsAmount: 1, constitutionModApplies: false, savingThrows: MagicUserSavingThrows[3], attackBonus: 1, skillPoints: 0, level1Spells: 7, level2Spells: 6, level3Spells: 5, level4Spells: 5, level5Spells: 4, level6Spells: 3, level7Spells: 3, level8Spells: 2, level9Spells: 1 },
        { level: 18, experience: 0, hitPointsAmount: 1, constitutionModApplies: false, savingThrows: MagicUserSavingThrows[3], attackBonus: 1, skillPoints: 0, level1Spells: 7, level2Spells: 6, level3Spells: 6, level4Spells: 5, level5Spells: 4, level6Spells: 4, level7Spells: 3, level8Spells: 2, level9Spells: 2 },
        { level: 19, experience: 0, hitPointsAmount: 1, constitutionModApplies: false, savingThrows: MagicUserSavingThrows[4], attackBonus: 1, skillPoints: 0, level1Spells: 7, level2Spells: 7, level3Spells: 6, level4Spells: 5, level5Spells: 5, level6Spells: 4, level7Spells: 3, level8Spells: 3, level9Spells: 2 },
        { level: 20, experience: 0, hitPointsAmount: 1, constitutionModApplies: false, savingThrows: MagicUserSavingThrows[4], attackBonus: 1, skillPoints: 0, level1Spells: 8, level2Spells: 7, level3Spells: 6, level4Spells: 6, level5Spells: 5, level6Spells: 4, level7Spells: 4, level8Spells: 3, level9Spells: 2 }
    ],
    characterSkills: MagicUserSkills,
    surpriseChance: 2,
    enhancedCombatOptions: false
};

// SPECIALIST ///////////////////////////////////////////////////////
export const SpecialistCharacterClass: LotfpCharacterClass = {
    name: 'Specialist',
    description: 'Specialist description',
    keyAbilities: [Ability.dex],
    minHitPoints: 4,
    characterAbilities: [
        { level: 1, experience: 0, hitPointsDiceSize: 6, constitutionModApplies: true, savingThrows: SpecialistSavingThrows[0], attackBonus: 1, skillPoints: 4, level1Spells: 0, level2Spells: 0, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 2, experience: 0, hitPointsDiceSize: 6, constitutionModApplies: true, savingThrows: SpecialistSavingThrows[0], attackBonus: 1, skillPoints: 2, level1Spells: 0, level2Spells: 0, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 3, experience: 0, hitPointsDiceSize: 6, constitutionModApplies: true, savingThrows: SpecialistSavingThrows[0], attackBonus: 1, skillPoints: 2, level1Spells: 0, level2Spells: 0, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 4, experience: 0, hitPointsDiceSize: 6, constitutionModApplies: true, savingThrows: SpecialistSavingThrows[0], attackBonus: 1, skillPoints: 2, level1Spells: 0, level2Spells: 0, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 5, experience: 0, hitPointsDiceSize: 6, constitutionModApplies: true, savingThrows: SpecialistSavingThrows[1], attackBonus: 1, skillPoints: 2, level1Spells: 0, level2Spells: 0, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 6, experience: 0, hitPointsDiceSize: 6, constitutionModApplies: true, savingThrows: SpecialistSavingThrows[1], attackBonus: 1, skillPoints: 2, level1Spells: 0, level2Spells: 0, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 7, experience: 0, hitPointsDiceSize: 6, constitutionModApplies: true, savingThrows: SpecialistSavingThrows[1], attackBonus: 1, skillPoints: 2, level1Spells: 0, level2Spells: 0, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 8, experience: 0, hitPointsDiceSize: 6, constitutionModApplies: true, savingThrows: SpecialistSavingThrows[1], attackBonus: 1, skillPoints: 2, level1Spells: 0, level2Spells: 0, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 9, experience: 0, hitPointsDiceSize: 6, constitutionModApplies: true, savingThrows: SpecialistSavingThrows[2], attackBonus: 1, skillPoints: 2, level1Spells: 0, level2Spells: 0, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 10, experience: 0, hitPointsAmount: 2, constitutionModApplies: false, savingThrows: SpecialistSavingThrows[2], attackBonus: 1, skillPoints: 2, level1Spells: 0, level2Spells: 0, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 11, experience: 0, hitPointsAmount: 2, constitutionModApplies: false, savingThrows: SpecialistSavingThrows[2], attackBonus: 1, skillPoints: 2, level1Spells: 0, level2Spells: 0, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 12, experience: 0, hitPointsAmount: 2, constitutionModApplies: false, savingThrows: SpecialistSavingThrows[2], attackBonus: 1, skillPoints: 2, level1Spells: 0, level2Spells: 0, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 13, experience: 0, hitPointsAmount: 2, constitutionModApplies: false, savingThrows: SpecialistSavingThrows[3], attackBonus: 1, skillPoints: 2, level1Spells: 0, level2Spells: 0, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 14, experience: 0, hitPointsAmount: 2, constitutionModApplies: false, savingThrows: SpecialistSavingThrows[3], attackBonus: 1, skillPoints: 2, level1Spells: 0, level2Spells: 0, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 15, experience: 0, hitPointsAmount: 2, constitutionModApplies: false, savingThrows: SpecialistSavingThrows[3], attackBonus: 1, skillPoints: 2, level1Spells: 0, level2Spells: 0, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 16, experience: 0, hitPointsAmount: 2, constitutionModApplies: false, savingThrows: SpecialistSavingThrows[3], attackBonus: 1, skillPoints: 2, level1Spells: 0, level2Spells: 0, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 17, experience: 0, hitPointsAmount: 2, constitutionModApplies: false, savingThrows: SpecialistSavingThrows[4], attackBonus: 1, skillPoints: 2, level1Spells: 0, level2Spells: 0, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
    ],
    characterSkills: SpecialistSkills,
    surpriseChance: 2,
    enhancedCombatOptions: false
};

// DWARF ////////////////////////////////////////////////////////////
export const DwarfCharacterClass: LotfpCharacterClass = {
    name: 'Dwarf',
    description: 'Dwarf description',
    keyAbilities: [Ability.wis],
    minHitPoints: 6,
    characterAbilities: [
        { level: 1, experience: 0, hitPointsDiceSize: 10, constitutionModApplies: true, savingThrows: DwarfSavingThrows[1], attackBonus: 0, skillPoints: 0, level1Spells: 0, level2Spells: 0, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 2, experience: 0, hitPointsDiceSize: 10, constitutionModApplies: true, savingThrows: DwarfSavingThrows[1], attackBonus: 0, skillPoints: 0, level1Spells: 0, level2Spells: 0, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 3, experience: 0, hitPointsDiceSize: 10, constitutionModApplies: true, savingThrows: DwarfSavingThrows[1], attackBonus: 0, skillPoints: 0, level1Spells: 0, level2Spells: 0, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 4, experience: 0, hitPointsDiceSize: 10, constitutionModApplies: true, savingThrows: DwarfSavingThrows[2], attackBonus: 0, skillPoints: 0, level1Spells: 0, level2Spells: 0, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 5, experience: 0, hitPointsDiceSize: 10, constitutionModApplies: true, savingThrows: DwarfSavingThrows[2], attackBonus: 0, skillPoints: 0, level1Spells: 0, level2Spells: 0, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 6, experience: 0, hitPointsDiceSize: 10, constitutionModApplies: true, savingThrows: DwarfSavingThrows[2], attackBonus: 0, skillPoints: 0, level1Spells: 0, level2Spells: 0, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 7, experience: 0, hitPointsDiceSize: 10, constitutionModApplies: true, savingThrows: DwarfSavingThrows[3], attackBonus: 0, skillPoints: 0, level1Spells: 0, level2Spells: 0, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 8, experience: 0, hitPointsDiceSize: 10, constitutionModApplies: true, savingThrows: DwarfSavingThrows[3], attackBonus: 0, skillPoints: 0, level1Spells: 0, level2Spells: 0, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 9, experience: 0, hitPointsDiceSize: 10, constitutionModApplies: true, savingThrows: DwarfSavingThrows[3], attackBonus: 0, skillPoints: 0, level1Spells: 0, level2Spells: 0, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 10, experience: 0, hitPointsAmount: 3, constitutionModApplies: false, savingThrows: DwarfSavingThrows[4], attackBonus: 0, skillPoints: 0, level1Spells: 0, level2Spells: 0, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 11, experience: 0, hitPointsAmount: 3, constitutionModApplies: false, savingThrows: DwarfSavingThrows[4], attackBonus: 0, skillPoints: 0, level1Spells: 0, level2Spells: 0, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 12, experience: 0, hitPointsAmount: 3, constitutionModApplies: false, savingThrows: DwarfSavingThrows[4], attackBonus: 0, skillPoints: 0, level1Spells: 0, level2Spells: 0, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 }
    ],
    characterSkills: DwarfSkills,
    surpriseChance: 2,
    enhancedCombatOptions: true
};

// ELF //////////////////////////////////////////////////////////////
export const ElfCharacterClass: LotfpCharacterClass = {
    name: 'Elf',
    description: 'Elf description',
    keyAbilities: [Ability.dex],
    minHitPoints: 4,
    characterAbilities: [
        { level: 1, experience: 0, hitPointsDiceSize: 6, constitutionModApplies: true, savingThrows: ElfSavingThrows[0], attackBonus: 1, skillPoints: 0, level1Spells: 1, level2Spells: 0, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 2, experience: 0, hitPointsDiceSize: 6, constitutionModApplies: true, savingThrows: ElfSavingThrows[0], attackBonus: 1, skillPoints: 0, level1Spells: 2, level2Spells: 0, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 3, experience: 0, hitPointsDiceSize: 6, constitutionModApplies: true, savingThrows: ElfSavingThrows[0], attackBonus: 1, skillPoints: 0, level1Spells: 2, level2Spells: 1, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 4, experience: 0, hitPointsDiceSize: 6, constitutionModApplies: true, savingThrows: ElfSavingThrows[1], attackBonus: 1, skillPoints: 0, level1Spells: 2, level2Spells: 2, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 5, experience: 0, hitPointsDiceSize: 6, constitutionModApplies: true, savingThrows: ElfSavingThrows[1], attackBonus: 1, skillPoints: 0, level1Spells: 3, level2Spells: 2, level3Spells: 1, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 6, experience: 0, hitPointsDiceSize: 6, constitutionModApplies: true, savingThrows: ElfSavingThrows[1], attackBonus: 1, skillPoints: 0, level1Spells: 3, level2Spells: 2, level3Spells: 2, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 7, experience: 0, hitPointsDiceSize: 6, constitutionModApplies: true, savingThrows: ElfSavingThrows[2], attackBonus: 1, skillPoints: 0, level1Spells: 3, level2Spells: 3, level3Spells: 2, level4Spells: 1, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 8, experience: 0, hitPointsDiceSize: 6, constitutionModApplies: true, savingThrows: ElfSavingThrows[2], attackBonus: 1, skillPoints: 0, level1Spells: 4, level2Spells: 3, level3Spells: 2, level4Spells: 2, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 9, experience: 0, hitPointsDiceSize: 6, constitutionModApplies: true, savingThrows: ElfSavingThrows[2], attackBonus: 1, skillPoints: 0, level1Spells: 4, level2Spells: 3, level3Spells: 3, level4Spells: 2, level5Spells: 1, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 10, experience: 0, hitPointsAmount: 2, constitutionModApplies: false, savingThrows: ElfSavingThrows[3], attackBonus: 1, skillPoints: 0, level1Spells: 4, level2Spells: 4, level3Spells: 3, level4Spells: 2, level5Spells: 2, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 11, experience: 0, hitPointsAmount: 2, constitutionModApplies: false, savingThrows: ElfSavingThrows[3], attackBonus: 1, skillPoints: 0, level1Spells: 5, level2Spells: 4, level3Spells: 3, level4Spells: 3, level5Spells: 2, level6Spells: 1, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 12, experience: 0, hitPointsAmount: 2, constitutionModApplies: false, savingThrows: ElfSavingThrows[3], attackBonus: 1, skillPoints: 0, level1Spells: 5, level2Spells: 4, level3Spells: 4, level4Spells: 3, level5Spells: 2, level6Spells: 2, level7Spells: 1, level8Spells: 0, level9Spells: 0 },
        { level: 13, experience: 0, hitPointsAmount: 2, constitutionModApplies: false, savingThrows: ElfSavingThrows[4], attackBonus: 1, skillPoints: 0, level1Spells: 5, level2Spells: 5, level3Spells: 4, level4Spells: 3, level5Spells: 3, level6Spells: 2, level7Spells: 1, level8Spells: 0, level9Spells: 0 },
        { level: 14, experience: 0, hitPointsAmount: 2, constitutionModApplies: false, savingThrows: ElfSavingThrows[4], attackBonus: 1, skillPoints: 0, level1Spells: 6, level2Spells: 5, level3Spells: 4, level4Spells: 4, level5Spells: 3, level6Spells: 2, level7Spells: 2, level8Spells: 0, level9Spells: 0 },
        { level: 15, experience: 0, hitPointsAmount: 2, constitutionModApplies: false, savingThrows: ElfSavingThrows[4], attackBonus: 1, skillPoints: 0, level1Spells: 6, level2Spells: 5, level3Spells: 5, level4Spells: 4, level5Spells: 3, level6Spells: 3, level7Spells: 2, level8Spells: 1, level9Spells: 0 },
        { level: 16, experience: 0, hitPointsAmount: 2, constitutionModApplies: false, savingThrows: ElfSavingThrows[4], attackBonus: 1, skillPoints: 0, level1Spells: 6, level2Spells: 6, level3Spells: 5, level4Spells: 4, level5Spells: 4, level6Spells: 3, level7Spells: 2, level8Spells: 2, level9Spells: 0 },
        { level: 17, experience: 0, hitPointsAmount: 2, constitutionModApplies: false, savingThrows: ElfSavingThrows[5], attackBonus: 1, skillPoints: 0, level1Spells: 7, level2Spells: 6, level3Spells: 5, level4Spells: 5, level5Spells: 4, level6Spells: 3, level7Spells: 3, level8Spells: 2, level9Spells: 1 },
    ],
    characterSkills: ElfSkills,
    surpriseChance: 1,
    enhancedCombatOptions: true
};

// HALFLING /////////////////////////////////////////////////////////
export const HalflingCharacterClass: LotfpCharacterClass = {
    name: 'Halfling',
    description: 'Halfling description',
    keyAbilities: [Ability.dex],
    minHitPoints: 4,
    characterAbilities: [
        { level: 1, experience: 0, hitPointsDiceSize: 6, constitutionModApplies: true, savingThrows: HalflingSavingThrows[0], attackBonus: 0, skillPoints: 0, level1Spells: 0, level2Spells: 0, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 2, experience: 0, hitPointsDiceSize: 6, constitutionModApplies: true, savingThrows: HalflingSavingThrows[1], attackBonus: 0, skillPoints: 0, level1Spells: 0, level2Spells: 0, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 3, experience: 0, hitPointsDiceSize: 6, constitutionModApplies: true, savingThrows: HalflingSavingThrows[1], attackBonus: 0, skillPoints: 0, level1Spells: 0, level2Spells: 0, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 4, experience: 0, hitPointsDiceSize: 6, constitutionModApplies: true, savingThrows: HalflingSavingThrows[2], attackBonus: 0, skillPoints: 0, level1Spells: 0, level2Spells: 0, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 5, experience: 0, hitPointsDiceSize: 6, constitutionModApplies: true, savingThrows: HalflingSavingThrows[2], attackBonus: 0, skillPoints: 0, level1Spells: 0, level2Spells: 0, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 6, experience: 0, hitPointsDiceSize: 6, constitutionModApplies: true, savingThrows: HalflingSavingThrows[3], attackBonus: 0, skillPoints: 0, level1Spells: 0, level2Spells: 0, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 7, experience: 0, hitPointsDiceSize: 6, constitutionModApplies: true, savingThrows: HalflingSavingThrows[3], attackBonus: 0, skillPoints: 0, level1Spells: 0, level2Spells: 0, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 8, experience: 0, hitPointsDiceSize: 6, constitutionModApplies: true, savingThrows: HalflingSavingThrows[4], attackBonus: 0, skillPoints: 0, level1Spells: 0, level2Spells: 0, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 9, experience: 0, hitPointsDiceSize: 6, constitutionModApplies: true, savingThrows: HalflingSavingThrows[4], attackBonus: 0, skillPoints: 0, level1Spells: 0, level2Spells: 0, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
        { level: 10, experience: 0, hitPointsAmount: 2, constitutionModApplies: false, savingThrows: HalflingSavingThrows[4], attackBonus: 0, skillPoints: 0, level1Spells: 0, level2Spells: 0, level3Spells: 0, level4Spells: 0, level5Spells: 0, level6Spells: 0, level7Spells: 0, level8Spells: 0, level9Spells: 0 },
    ],
    characterSkills: HalflingSkills,
    surpriseChance: 2,
    enhancedCombatOptions: false
};

// Array of all possible character classes with their bonuses ///////
export const CharacterClasses: LotfpCharacterClass[] = [
    FighterCharacterClass,
    ClericCharacterClass,
    MagicUserCharacterClass,
    SpecialistCharacterClass,
    DwarfCharacterClass,
    ElfCharacterClass,
    HalflingCharacterClass
];
