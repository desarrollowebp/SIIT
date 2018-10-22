import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorarioHorarioComponent } from './horario-horario.component';

describe('HorarioHorarioComponent', () => {
  let component: HorarioHorarioComponent;
  let fixture: ComponentFixture<HorarioHorarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorarioHorarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorarioHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
