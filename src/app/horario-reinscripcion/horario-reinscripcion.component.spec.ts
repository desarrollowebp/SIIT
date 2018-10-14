import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorarioReinscripcionComponent } from './horario-reinscripcion.component';

describe('HorarioReinscripcionComponent', () => {
  let component: HorarioReinscripcionComponent;
  let fixture: ComponentFixture<HorarioReinscripcionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorarioReinscripcionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorarioReinscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
