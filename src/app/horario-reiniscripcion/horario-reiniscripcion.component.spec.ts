import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorarioReiniscripcionComponent } from './horario-reiniscripcion.component';

describe('HorarioReiniscripcionComponent', () => {
  let component: HorarioReiniscripcionComponent;
  let fixture: ComponentFixture<HorarioReiniscripcionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorarioReiniscripcionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorarioReiniscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
