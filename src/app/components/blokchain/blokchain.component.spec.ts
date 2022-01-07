/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BlokchainComponent } from './blokchain.component';

describe('BlokchainComponent', () => {
  let component: BlokchainComponent;
  let fixture: ComponentFixture<BlokchainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlokchainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlokchainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
