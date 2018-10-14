import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosEscolaresComponent } from './datos-escolares.component';

describe('DatosEscolaresComponent', () => {
  let component: DatosEscolaresComponent;
  let fixture: ComponentFixture<DatosEscolaresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosEscolaresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosEscolaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
