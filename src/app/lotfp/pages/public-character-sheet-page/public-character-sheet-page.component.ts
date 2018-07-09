import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { LotfpCharacter } from '../../models/models';
import { Subscription } from 'rxjs';
import { CharacterSheetComponent } from '../../components/character-sheet/character-sheet.component';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'public-character-sheet-page',
  templateUrl: './public-character-sheet-page.component.html',
  styleUrls: ['./public-character-sheet-page.component.scss']
})
export class PublicCharacterSheetPageComponent implements OnInit {
  // The users current character
  character: LotfpCharacter = {};

  // Subscriptions
  routerSub: Subscription;
  characterSub: Subscription;

  @ViewChild('sheets') characterSheets: CharacterSheetComponent;

  constructor(
    private characterService: CharacterService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // Get the character being created/edited
    this.routerSub = this.route.params.subscribe((params: Params) => {
      // Get the route
      const id = params['id'];
      // Get the character
      this.characterSub = this.characterService.getSingle(id).subscribe(response => {
        if (response && response.length > 0) {
          console.log('Character updates', response);
          this.character = response.find(e => e.id === id);
          // Render the character sheet
          this.characterSheets.renderSheets(this.character);
        }
      });
    });
  }

  ngAfterViewInit() { // wait for the view to init before using the element
  }

  printSheet() {
    window.print();
  }

  ngOnDestroy(): void {
    this.routerSub.unsubscribe();
    this.characterSub.unsubscribe();
  }
}
