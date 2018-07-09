import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCharacterAbilitiesPageComponent } from './create-character-abilities-page.component';

describe('CreateCharacterAbilitiesPageComponent', () => {
  let component: CreateCharacterAbilitiesPageComponent;
  let fixture: ComponentFixture<CreateCharacterAbilitiesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCharacterAbilitiesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCharacterAbilitiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
