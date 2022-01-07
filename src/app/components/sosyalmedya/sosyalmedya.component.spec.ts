/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SosyalmedyaComponent } from './sosyalmedya.component';

describe('SosyalmedyaComponent', () => {
  let component: SosyalmedyaComponent;
  let fixture: ComponentFixture<SosyalmedyaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SosyalmedyaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SosyalmedyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
