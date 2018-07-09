import { LotfpArmour, LotfpWeapon, LotfpRangedWeapon, LotfpEquipment } from './equipment';
import { LotfpSpell } from './spells';

export interface BaseDocument {
    id?: string;
    owner?: string;
    system?: string;
}

export interface LotfpParty extends BaseDocument {
    name?: string;
    description?: string;
}

export interface LotfpCharacter extends BaseDocument {
    name?: string;
    background?: string;
    isPublic?: boolean;

    // Ability scores
    charisma?: AbilityScore;
    constitution?: AbilityScore;
    dexterity?: AbilityScore;
    intelligence?: AbilityScore;
    strength?: AbilityScore;
    wisdom?: AbilityScore;

    // Saving throws
    paralyseSavingThrow?: number;
    poisonSavingThrow?: number;
    breathSavingThrow?: number;
    deviceSavingThrow?: number;
    magicSavingThrow?: number;

    // Character class
    characterClass?: string;
    level?: number;
    hitPoints?: number;
    attackBonus?: number;
    surpriseChange?: number;

    // Wealth
    silver?: number;
    encumberancePoints?: number;

    // Armour classes
    acMelee?: number;
    acRanged?: number;
    acWithoutShield?: number;
    acSurprised?: number;

    // Spells
    spells?: LotfpSpell[];
    level1Spells?: number;
    level2Spells?: number;
    level3Spells?: number;
    level4Spells?: number;
    level5Spells?: number;
    level6Spells?: number;
    level7Spells?: number;
    level8Spells?: number;
    level9Spells?: number;

    // Skills
    skillPointsToSpend?: number;
    architectureSkill?: number;
    bushcraftSkill?: number;
    climbingSkill?: number;
    languagesSkill?: number;
    openDoorsSkill?: number;
    searchSkill?: number;
    sleightOfHandSkill?: number;
    sneakAttackSkill?: number;
    stealthSkill?: number;
    tinkeringSkill?: number;
    architectureSkillMin?: number;
    bushcraftSkillMin?: number;
    climbingSkillMin?: number;
    languagesSkillMin?: number;
    openDoorsSkillMin?: number;
    searchSkillMin?: number;
    sleightOfHandSkillMin?: number;
    sneakAttackSkillMin?: number;
    stealthSkillMin?: number;
    tinkeringSkillMin?: number;

    // Equipment
    armour?: LotfpArmour;
    shield?: LotfpArmour;
    weapons?: LotfpWeapon[];
    rangedWeapons?: LotfpRangedWeapon[];
    equipment?: LotfpEquipment[];

    // Operations
    inProgress?: boolean;
}

export interface AbilityScore {
    value: number;
    modifier: number;
}

