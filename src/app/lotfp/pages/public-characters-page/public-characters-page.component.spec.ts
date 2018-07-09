import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicCharactersPageComponent } from './public-characters-page.component';

describe('PublicCharactersPageComponent', () => {
  let component: PublicCharactersPageComponent;
  let fixture: ComponentFixture<PublicCharactersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicCharactersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicCharactersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
