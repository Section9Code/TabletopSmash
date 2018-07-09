import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicCharacterListComponent } from './public-character-list.component';

describe('PublicCharacterListComponent', () => {
  let component: PublicCharacterListComponent;
  let fixture: ComponentFixture<PublicCharacterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicCharacterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicCharacterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
