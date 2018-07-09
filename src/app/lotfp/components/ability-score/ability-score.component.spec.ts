import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilityScoreComponent } from './ability-score.component';

describe('AbilityScoreComponent', () => {
  let component: AbilityScoreComponent;
  let fixture: ComponentFixture<AbilityScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbilityScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbilityScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
