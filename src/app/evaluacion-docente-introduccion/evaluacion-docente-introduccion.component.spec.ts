import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionDocenteIntroduccionComponent } from './evaluacion-docente-introduccion.component';

describe('EvaluacionDocenteIntroduccionComponent', () => {
  let component: EvaluacionDocenteIntroduccionComponent;
  let fixture: ComponentFixture<EvaluacionDocenteIntroduccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluacionDocenteIntroduccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluacionDocenteIntroduccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
