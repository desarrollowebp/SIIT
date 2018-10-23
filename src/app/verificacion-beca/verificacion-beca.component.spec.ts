import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import *as $ from 'jquery'

import { VerificacionBecaComponent } from './verificacion-beca.component';

describe('VerificacionBecaComponent', () => {
  let component: VerificacionBecaComponent;
  let fixture: ComponentFixture<VerificacionBecaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificacionBecaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificacionBecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
