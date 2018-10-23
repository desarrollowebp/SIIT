import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigoColoresMateriaComponent } from './codigo-colores-materia.component';

describe('CodigoColoresMateriaComponent', () => {
  let component: CodigoColoresMateriaComponent;
  let fixture: ComponentFixture<CodigoColoresMateriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodigoColoresMateriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodigoColoresMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
