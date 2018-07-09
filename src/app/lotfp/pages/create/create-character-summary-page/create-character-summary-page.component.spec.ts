import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCharacterSummaryPageComponent } from './create-character-summary-page.component';

describe('CreateCharacterSummaryPageComponent', () => {
  let component: CreateCharacterSummaryPageComponent;
  let fixture: ComponentFixture<CreateCharacterSummaryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCharacterSummaryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCharacterSummaryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
