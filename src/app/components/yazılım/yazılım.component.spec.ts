/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { YazılımComponent } from './yazılım.component';

describe('YazılımComponent', () => {
  let component: YazılımComponent;
  let fixture: ComponentFixture<YazılımComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YazılımComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YazılımComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
