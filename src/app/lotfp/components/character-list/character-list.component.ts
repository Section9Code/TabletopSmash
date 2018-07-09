import { Component, OnInit, OnDestroy } from '@angular/core';
import { LotfpCharacter } from '../../models/models';
import { CharacterService } from '../../services/character.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit, OnDestroy {
  characters: LotfpCharacter[] = [];
  charactersSub: Subscription;

  constructor(private characterService: CharacterService, private router: Router, private toast: ToastyService) { }

  async ngOnInit() {
    const dataObservable = await this.characterService.getMine();
    this.charactersSub = dataObservable.subscribe(data => this.characters = data);
  }

  ngOnDestroy(): void {
    this.charactersSub.unsubscribe();
  }

  async createCharacter() {
    const newCharacter: LotfpCharacter = {
      level: 1,
      inProgress: true
    };

    const id = await this.characterService.add(newCharacter);
    this.toast.success('Character added');
    this.router.navigate(['/lotfp/characters', id]);
  }

  edit(id: string) {
    this.router.navigate(['/lotfp/characters', id]);
  }

  async delete(id: string) {
    if (confirm('Are you sure you want to delete this character?')) {
      await this.characterService.delete(id);
      this.toast.success('Character deleted');
    }
  }
}
