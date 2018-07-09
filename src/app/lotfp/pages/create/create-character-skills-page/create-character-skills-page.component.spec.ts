import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCharacterSkillsPageComponent } from './create-character-skills-page.component';

describe('CreateCharacterSkillsPageComponent', () => {
  let component: CreateCharacterSkillsPageComponent;
  let fixture: ComponentFixture<CreateCharacterSkillsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCharacterSkillsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCharacterSkillsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
