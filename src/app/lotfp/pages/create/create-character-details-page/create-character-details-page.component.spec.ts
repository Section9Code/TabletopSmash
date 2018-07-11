import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCharacterDetailsPageComponent } from './create-character-details-page.component';

describe('CreateCharacterDetailsPageComponent', () => {
  let component: CreateCharacterDetailsPageComponent;
  let fixture: ComponentFixture<CreateCharacterDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCharacterDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCharacterDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
