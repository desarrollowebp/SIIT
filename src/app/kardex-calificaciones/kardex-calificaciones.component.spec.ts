import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KardexCalificacionesComponent } from './kardex-calificaciones.component';

describe('KardexCalificacionesComponent', () => {
  let component: KardexCalificacionesComponent;
  let fixture: ComponentFixture<KardexCalificacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KardexCalificacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KardexCalificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
