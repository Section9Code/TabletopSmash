import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartiesListComponent } from './components/parties-list/parties-list.component';
import { UserHomePageComponent } from './pages/user-home-page/user-home-page.component';
import { CoreModule } from '../core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/auth.guard';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterCreatorProgressComponent } from './components/character-creator-progress/character-creator-progress.component';
import { AbilityScorePipe } from './pipes/ability-score.pipe';
import { AbilityModifierPipe } from './pipes/ability-modifier.pipe';
import { AbilityScoreComponent } from './components/ability-score/ability-score.component';
import { CreateCharacterPageComponent } from './pages/create/create-character-page/create-character-page.component';
import { CreateCharacterAbilitiesPageComponent } from './pages/create/create-character-abilities-page/create-character-abilities-page.component';
import { CreateCharacterHitPointsPageComponent } from './pages/create/create-character-hit-points-page/create-character-hit-points-page.component';
import { CharacterSummaryComponent } from './components/character-summary/character-summary.component';
import { CreateCharacterSkillsPageComponent } from './pages/create/create-character-skills-page/create-character-skills-page.component';
import { SkillRatingComponent } from './components/skill-rating/skill-rating.component';
import { CreateCharacterEquipmentPageComponent } from './pages/create/create-character-equipment-page/create-character-equipment-page.component';
import { EquipmentListComponent } from './components/equipment-list/equipment-list.component';
import { CreateCharacterMagicPageComponent } from './pages/create/create-character-magic-page/create-character-magic-page.component';
import { CreateCharacterSummaryPageComponent } from './pages/create/create-character-summary-page/create-character-summary-page.component';
import { SpellListComponent } from './components/spell-list/spell-list.component';
import { CharacterSheetComponent } from './components/character-sheet/character-sheet.component';
import { PublicCharactersPageComponent } from './pages/public-characters-page/public-characters-page.component';
import { PublicCharacterListComponent } from './components/public-character-list/public-character-list.component';
import { PublicCharacterSheetPageComponent } from './pages/public-character-sheet-page/public-character-sheet-page.component';
import { CreateCharacterDetailsPageComponent } from './pages/create/create-character-details-page/create-character-details-page.component';

// Routes for the module
const lotfpRoutes: Routes = [
  {
    path: 'lotfp', children: [
      { path: '', redirectTo: 'public', pathMatch: 'full' },
      { path: 'public', component: PublicCharactersPageComponent },
      { path: 'public/:id', component: PublicCharacterSheetPageComponent },
      { path: 'mine', component: UserHomePageComponent, canActivate: [AuthGuard] },
      { path: 'characters', component: CharactersPageComponent, canActivate: [AuthGuard] },
      { path: 'characters/:id', component: CreateCharacterPageComponent, canActivate: [AuthGuard] },
      { path: 'characters/:id/abilities', component: CreateCharacterAbilitiesPageComponent, canActivate: [AuthGuard] },
      { path: 'characters/:id/class', component: CreateCharacterHitPointsPageComponent, canActivate: [AuthGuard] },
      { path: 'characters/:id/skills', component: CreateCharacterSkillsPageComponent, canActivate: [AuthGuard] },
      { path: 'characters/:id/equipment', component: CreateCharacterEquipmentPageComponent, canActivate: [AuthGuard] },
      { path: 'characters/:id/magic', component: CreateCharacterMagicPageComponent, canActivate: [AuthGuard] },
      { path: 'characters/:id/details', component: CreateCharacterDetailsPageComponent, canActivate: [AuthGuard] },
      { path: 'characters/:id/summary', component: CreateCharacterSummaryPageComponent, canActivate: [AuthGuard] }
    ]
  }
];

@NgModule({
  imports: [
    CoreModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(lotfpRoutes)
  ],
  declarations: [
    PartiesListComponent,
    UserHomePageComponent,
    CharactersPageComponent,
    CharacterListComponent,
    CreateCharacterPageComponent,
    CharacterCreatorProgressComponent,
    CreateCharacterAbilitiesPageComponent,
    AbilityScorePipe,
    AbilityModifierPipe,
    AbilityScoreComponent,
    CreateCharacterHitPointsPageComponent,
    CharacterSummaryComponent,
    CreateCharacterSkillsPageComponent,
    SkillRatingComponent,
    CreateCharacterEquipmentPageComponent,
    EquipmentListComponent,
    CreateCharacterMagicPageComponent,
    CreateCharacterSummaryPageComponent,
    SpellListComponent,
    CharacterSheetComponent,
    PublicCharactersPageComponent,
    PublicCharacterListComponent,
    PublicCharacterSheetPageComponent,
    CreateCharacterDetailsPageComponent
  ],
  exports: [
    PartiesListComponent
  ]
})
export class LotfpModule { }
