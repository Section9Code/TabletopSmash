import { DBService } from './db.service';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from '../../core/auth.service';
import { LotfpParty } from '../models/models';

@Injectable({
    providedIn: 'root'
})
export class PartyService extends DBService<LotfpParty> {

    constructor(private _db: AngularFirestore, private _auth: AuthService) {
        super(_db, _auth);
    }

    init() {
        this.path = 'parties';
        super.load();
    }
}
