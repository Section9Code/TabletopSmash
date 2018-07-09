import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCharacterHitPointsPageComponent } from './create-character-hit-points-page.component';

describe('CreateCharacterHitPointsPageComponent', () => {
  let component: CreateCharacterHitPointsPageComponent;
  let fixture: ComponentFixture<CreateCharacterHitPointsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCharacterHitPointsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCharacterHitPointsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
