import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionDocenteComponent } from './evaluacion-docente.component';

describe('EvaluacionDocenteComponent', () => {
  let component: EvaluacionDocenteComponent;
  let fixture: ComponentFixture<EvaluacionDocenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluacionDocenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluacionDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
