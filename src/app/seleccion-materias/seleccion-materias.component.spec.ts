import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionMateriasComponent } from './seleccion-materias.component';

describe('SeleccionMateriasComponent', () => {
  let component: SeleccionMateriasComponent;
  let fixture: ComponentFixture<SeleccionMateriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeleccionMateriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionMateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
