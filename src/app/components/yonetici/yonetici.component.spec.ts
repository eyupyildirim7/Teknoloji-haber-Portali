/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { YoneticiComponent } from './yonetici.component';

describe('YoneticiComponent', () => {
  let component: YoneticiComponent;
  let fixture: ComponentFixture<YoneticiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoneticiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoneticiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
