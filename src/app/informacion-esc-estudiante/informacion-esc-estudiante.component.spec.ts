import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionEscEstudianteComponent } from './informacion-esc-estudiante.component';

describe('InformacionEscEstudianteComponent', () => {
  let component: InformacionEscEstudianteComponent;
  let fixture: ComponentFixture<InformacionEscEstudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionEscEstudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionEscEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
