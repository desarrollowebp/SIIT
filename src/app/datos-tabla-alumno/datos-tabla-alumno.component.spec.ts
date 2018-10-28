import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosTablaAlumnoComponent } from './datos-tabla-alumno.component';

describe('DatosTablaAlumnoComponent', () => {
  let component: DatosTablaAlumnoComponent;
  let fixture: ComponentFixture<DatosTablaAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosTablaAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosTablaAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
