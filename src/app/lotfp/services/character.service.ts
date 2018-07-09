import { DBService } from './db.service';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, QueryFn } from 'angularfire2/firestore';
import { AuthService } from '../../core/auth.service';
import { LotfpCharacter } from '../models/models';
import { Subscription } from 'rxjs';
import { LotfpEquipment } from '../models/equipment';
import { Observable } from '@firebase/util';

@Injectable({
    providedIn: 'root'
})
export class CharacterService extends DBService<LotfpCharacter> {

    subReCalcAc: Subscription;
    subReCalcEncumberance: Subscription;

    constructor(private _db: AngularFirestore, private _auth: AuthService) {
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
}
