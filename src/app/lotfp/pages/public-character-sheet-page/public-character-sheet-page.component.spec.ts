import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicCharacterSheetPageComponent } from './public-character-sheet-page.component';

describe('PublicCharacterSheetPageComponent', () => {
  let component: PublicCharacterSheetPageComponent;
  let fixture: ComponentFixture<PublicCharacterSheetPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicCharacterSheetPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicCharacterSheetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
