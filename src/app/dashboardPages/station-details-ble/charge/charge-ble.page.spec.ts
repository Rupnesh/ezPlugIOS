import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargeBlePage } from './charge-ble.page';

describe('ChargePage', () => {
  let component: ChargeBlePage;
  let fixture: ComponentFixture<ChargeBlePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChargeBlePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargeBlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
