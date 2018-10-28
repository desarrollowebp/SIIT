import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreSeleccionMateriasComponent } from './pre-seleccion-materias.component';

describe('PreSeleccionMateriasComponent', () => {
  let component: PreSeleccionMateriasComponent;
  let fixture: ComponentFixture<PreSeleccionMateriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreSeleccionMateriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreSeleccionMateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
