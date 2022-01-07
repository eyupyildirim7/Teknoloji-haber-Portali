/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UyesilComponent } from './uyesil.component';

describe('UyesilComponent', () => {
  let component: UyesilComponent;
  let fixture: ComponentFixture<UyesilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UyesilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UyesilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
