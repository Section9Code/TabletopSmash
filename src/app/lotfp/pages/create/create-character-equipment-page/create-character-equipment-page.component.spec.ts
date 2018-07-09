import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCharacterEquipmentPageComponent } from './create-character-equipment-page.component';

describe('CreateCharacterEquipmentPageComponent', () => {
  let component: CreateCharacterEquipmentPageComponent;
  let fixture: ComponentFixture<CreateCharacterEquipmentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCharacterEquipmentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCharacterEquipmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
