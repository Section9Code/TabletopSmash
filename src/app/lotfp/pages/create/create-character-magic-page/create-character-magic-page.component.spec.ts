import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCharacterMagicPageComponent } from './create-character-magic-page.component';

describe('CreateCharacterMagicPageComponent', () => {
  let component: CreateCharacterMagicPageComponent;
  let fixture: ComponentFixture<CreateCharacterMagicPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCharacterMagicPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCharacterMagicPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
