/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KayıtekleComponent } from './kayıtekle.component';

describe('KayıtekleComponent', () => {
  let component: KayıtekleComponent;
  let fixture: ComponentFixture<KayıtekleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KayıtekleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KayıtekleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
