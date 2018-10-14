import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificacionesParcialesComponent } from './calificaciones-parciales.component';

describe('CalificacionesParcialesComponent', () => {
  let component: CalificacionesParcialesComponent;
  let fixture: ComponentFixture<CalificacionesParcialesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalificacionesParcialesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalificacionesParcialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
