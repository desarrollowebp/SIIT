import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificacionesExamenesComponent } from './calificaciones-examenes.component';

describe('CalificacionesExamenesComponent', () => {
  let component: CalificacionesExamenesComponent;
  let fixture: ComponentFixture<CalificacionesExamenesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalificacionesExamenesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalificacionesExamenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
