import { DBService } from './db.service';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, QueryFn } from 'angularfire2/firestore';
import { AuthService } from '../../core/auth.service';
import { LotfpCharacter } from '../models/models';
import { Subscription } from 'rxjs';
import { LotfpEquipment } from '../models/equipment';
import { Observable } from '@firebase/util';
import { SUBSTITUTION_EXPR_END } from '@angular/animations/browser/src/util';
import { LotfpCharacterClass, CharacterClasses } from '../models/CharacterClasses';
import { ToastyService } from 'ng2-toasty';

@Injectable({
    providedIn: 'root'
})
export class CharacterService extends DBService<LotfpCharacter> {

    subReCalcAc: Subscription;
    subReCalcEncumberance: Subscription;

    constructor(private _db: AngularFirestore, private _auth: AuthService, private toast: ToastyService) {
        super(_db, _auth);
        this.init();
    }

    init() {
        this.path = 'characters';
        super.load();
    }

    getAllPublic(lastItemId?: string, startAfter = true, numberToFetch = 3) {
        let coll: AngularFirestoreCollection;
        if (!lastItemId) {
            // No last fetch, start from the beginning
            coll = this._db.collection(this.path, ref => ref.where('isPublic', '==', true).orderBy('id').limit(numberToFetch));
        } else {
            if (startAfter) {
                // Get the next lot of items after the one supplied
                console.log('Load data, starts after ', lastItemId);
                coll = this._db.collection(this.path, ref => ref.where('isPublic', '==', true).orderBy('id').startAfter(lastItemId).limit(numberToFetch));
            } else {
                // Get the previous lot of items ending at the one supplied
                console.log('Load data, start at ', lastItemId);
                coll = this._db.collection(this.path, ref => ref.where('isPublic', '==', true).orderBy('id').endAt(lastItemId).limit(numberToFetch));
            }
        }
        return this.collectionToObservable(coll);
    }



    recalculateArmourClass(id: string) {
        // Get the character to recalculate
        this.subReCalcAc = this.getSingle(id).subscribe(characters => {
            const char = characters[0];
            console.log('Recalculate AC', char);

            // Values
            let melee = 0;
            let ranged = 0;
            let withoutShield = 0;
            let surprised = 0;

            // Calc melee AC
            if (char.armour) {
                melee = char.armour.baseAc + char.dexterity.modifier;
                surprised = char.armour.baseAc - 2;
            } else {
                melee = 12 + char.dexterity.modifier;
                surprised = 12 - 2;
            }

            // Calc ranged + without shield AC
            if (char.shield) {
                // Has shield
                melee = melee + 1;  // Add on the shield bonus to the user AC
                ranged = melee + 1; // Add on one more to the modifed AC for ranged (+2 on top of base AC)
                withoutShield = melee - 1;  // Take away 1 from the modified AC (base AC)
            } else {
                // No shield
                ranged = melee;
                withoutShield = melee;
            }

            // Update the character
            this.updateValues(char.id, { acMelee: melee, acRanged: ranged, acWithoutShield: withoutShield, acSurprised: surprised });

            // Stop listening for changes to the character
            this.subReCalcAc.unsubscribe();

            // Recalculate the encumberance
            this.recalculateEncumberance(char.id);
        });
    }

    recalculateEncumberance(id: string) {
        this.subReCalcEncumberance = this.getSingle(id).subscribe(characters => {
            // Get the character
            const char = characters[0];
            console.log('Recalculate encumberance', char);

            let points = 0;

            // Add the armour encumberance points
            if (char.armour) { points += char.armour.encumberancePoints; }

            // Load all the encumbering items into a list
            let items = [];
            let oversizedItems = [];

            // Encumber items of all types
            if (char.shield) { items.push(char.shield); }    // Shields do no
            if (char.weapons) { items = char.weapons.filter(w => w.encumbering && !w.oversized).concat(items); }
            if (char.rangedWeapons) { items = char.rangedWeapons.filter(r => r.encumbering && !r.oversized).concat(items); }
            if (char.equipment) { items = char.equipment.filter(e => e.encumbering && !e.oversized).concat(items); }

            // Oversized items
            if (char.weapons) { oversizedItems = char.weapons.filter(w => w.oversized).concat(oversizedItems); }
            if (char.rangedWeapons) { oversizedItems = char.rangedWeapons.filter(w => w.oversized).concat(oversizedItems); }
            if (char.equipment) { oversizedItems = char.equipment.filter(w => w.oversized).concat(oversizedItems); }

            // Calculate all the encumbering items
            if (items.length > 5) {
                // The first 5 items don't add any points to the encumberance
                // After that every 5 items add 1 point of encumberance
                points += Math.ceil((items.length - 5) / 5);
            }

            // Add a point on for ever oversized item
            points += oversizedItems.length;

            // Update the character
            this.updateValues(char.id, { encumberancePoints: points });

            // Stop listening for changes
            this.subReCalcEncumberance.unsubscribe();
        });
    }

    // Called when the characters class traits need to be recalculates (i.e. when the characters level changes)
    recalculateClassTraits(id: string): Promise<LotfpCharacter> {
        return new Promise((resolve, reject) => {
            // Get the character to be updated
            const subUpdate: Subscription = this.getSingle(id).subscribe(characters => {
                // Get the character
                const character = characters[0];

                // The user has changed the characters level, reset some of the stats
                const charClass: LotfpCharacterClass = CharacterClasses.find(i => i.name === character.characterClass);
                const classAbilities = charClass.characterAbilities.find(a => a.level === character.level);

                // Update the character
                this.updateValues(character.id, {
                    // Saving throws
                    paralyseSavingThrow: classAbilities.savingThrows.paralyze,
                    poisonSavingThrow: classAbilities.savingThrows.poison,
                    breathSavingThrow: classAbilities.savingThrows.breath,
                    deviceSavingThrow: classAbilities.savingThrows.device,
                    magicSavingThrow: classAbilities.savingThrows.magic,

                    // Spells
                    level1Spells: classAbilities.level1Spells,
                    level2Spells: classAbilities.level2Spells,
                    level3Spells: classAbilities.level3Spells,
                    level4Spells: classAbilities.level4Spells,
                    level5Spells: classAbilities.level5Spells,
                    level6Spells: classAbilities.level6Spells,
                    level7Spells: classAbilities.level7Spells,
                    level8Spells: classAbilities.level8Spells,
                    level9Spells: classAbilities.level9Spells
                });

                // Validate after the update
                this.validateCharacter(character);

                // Done - resolve promise
                resolve(character);
                subUpdate.unsubscribe();
            });
        });
    }

    // Validates a character is correct
    validateCharacter(character: LotfpCharacter): boolean {
        console.group('Validation. Character Level', character.level);
        let isValid = true;

        // Get character class setup
        const charClass: LotfpCharacterClass = CharacterClasses.find(i => i.name === character.characterClass);
        const classAbilities = charClass.characterAbilities.find(a => a.level === character.level);


        // Validate the characters spells against their level
        console.log('Validate spells');
        for (let i = 1; i <= 9; i++) {
            console.group(`Checking level ${i}`);

            // Check the number of spells the user has against what the class says they should have
            const charSpells = character.spells.filter(s => s.level === i).length;
            const allowedSpellCount = classAbilities[`level${i}Spells`];
            console.log(`Char spell count: ${charSpells} --- Allowed spell count ${allowedSpellCount}`);
            if (charSpells > allowedSpellCount) {
                console.log('Validation fail - To many spells');
                isValid = false;
                this.toast.warning({ msg: `Your character has too many level ${i} spells, please remove ${charSpells - allowedSpellCount}`, title: `Level ${i} Spells` });
            }

            if(charSpells < allowedSpellCount) {
                // The user can have more spells at this level
                this.toast.info({ msg: `You currently have ${charSpells} spells at level ${i}, you are now allowed ${allowedSpellCount}`, title: `Level ${i} Spells` });
            }

            console.groupEnd();
        }

        console.log('Validation complete. Is Valid:', isValid)
        console.groupEnd();
        return isValid;
    }
}
