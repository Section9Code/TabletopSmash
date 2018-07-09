import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCreatorProgressComponent } from './character-creator-progress.component';

describe('CharacterCreatorProgressComponent', () => {
  let component: CharacterCreatorProgressComponent;
  let fixture: ComponentFixture<CharacterCreatorProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterCreatorProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterCreatorProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
