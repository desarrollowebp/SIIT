import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionDocenteComprobanteComponent } from './evaluacion-docente-comprobante.component';

describe('EvaluacionDocenteComprobanteComponent', () => {
  let component: EvaluacionDocenteComprobanteComponent;
  let fixture: ComponentFixture<EvaluacionDocenteComprobanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluacionDocenteComprobanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluacionDocenteComprobanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
