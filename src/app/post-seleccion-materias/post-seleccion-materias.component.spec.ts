import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSeleccionMateriasComponent } from './post-seleccion-materias.component';

describe('PostSeleccionMateriasComponent', () => {
  let component: PostSeleccionMateriasComponent;
  let fixture: ComponentFixture<PostSeleccionMateriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostSeleccionMateriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostSeleccionMateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
