import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillRatingComponent } from './skill-rating.component';

describe('SkillRatingComponent', () => {
  let component: SkillRatingComponent;
  let fixture: ComponentFixture<SkillRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
