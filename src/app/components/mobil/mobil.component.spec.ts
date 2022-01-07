/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MobilComponent } from './mobil.component';

describe('MobilComponent', () => {
  let component: MobilComponent;
  let fixture: ComponentFixture<MobilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
