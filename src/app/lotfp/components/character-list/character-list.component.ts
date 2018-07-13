import { Component, OnInit, OnDestroy } from '@angular/core';
import { LotfpCharacter } from '../../models/models';
import { CharacterService } from '../../services/character.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ToastyService } from 'ng2-toasty';
import { TrackingService } from '../../../core/tracking.service';
import { AlertService } from '../../../core/alert.service';

@Component({
  selector: 'character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit, OnDestroy {
  characters: LotfpCharacter[] = [];
  charactersSub: Subscription;

  constructor(private characterService: CharacterService, private router: Router, private toast: ToastyService, private tracking: TrackingService, private alert: AlertService) { }

  async ngOnInit() {
    const dataObservable = await this.characterService.getMine();
    this.charactersSub = dataObservable.subscribe(data => this.characters = data);
  }

  ngOnDestroy(): void {
    this.charactersSub.unsubscribe();
  }

  async createCharacter() {
    this.tracking.trackEvent('character_create');
    const newCharacter: LotfpCharacter = {
      level: 1,
      inProgress: true
    };

    const id = await this.characterService.add(newCharacter);
    this.toast.success('Character added');
    this.router.navigate(['/lotfp/characters', id]);
  }

  edit(id: string) {
    this.tracking.trackEvent('character_edit');
    this.router.navigate(['/lotfp/characters', id]);
  }

  async delete(id: string) {

    this.alert.deleteWarning('Are you sure you want to delete this character?', 'Delete character').then(deleteConfirmed => {
      if (deleteConfirmed) {
        this.tracking.trackEvent('character_delete');
        this.characterService.delete(id).then(() => this.toast.success('Character deleted'));
      }
    });
  }
}
