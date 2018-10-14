import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GruposCargadosComponent } from './grupos-cargados.component';

describe('GruposCargadosComponent', () => {
  let component: GruposCargadosComponent;
  let fixture: ComponentFixture<GruposCargadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GruposCargadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GruposCargadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
