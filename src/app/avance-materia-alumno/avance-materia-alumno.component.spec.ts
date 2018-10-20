import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvanceMateriaAlumnoComponent } from './avance-materia-alumno.component';

describe('AvanceMateriaAlumnoComponent', () => {
  let component: AvanceMateriaAlumnoComponent;
  let fixture: ComponentFixture<AvanceMateriaAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvanceMateriaAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvanceMateriaAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
