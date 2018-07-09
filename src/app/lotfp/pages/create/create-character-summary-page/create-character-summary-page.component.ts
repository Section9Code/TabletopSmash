import { Component, OnInit, OnDestroy, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { LotfpCharacter } from '../../../models/models';
import { Subscription, range } from 'rxjs';
import { CharacterService } from '../../../services/character.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { isNgTemplate } from '@angular/compiler';
import { LotfpWeapon, LotfpRangedWeapon } from '../../../models/equipment';
import { CharacterSheetComponent } from '../../../components/character-sheet/character-sheet.component';

@Component({
  selector: 'create-character-summary-page',
  templateUrl: './create-character-summary-page.component.html',
  styleUrls: ['./create-character-summary-page.component.scss']
})
export class CreateCharacterSummaryPageComponent implements OnInit, OnDestroy, AfterViewInit {
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
          // Cause the characgter sheets to render
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
