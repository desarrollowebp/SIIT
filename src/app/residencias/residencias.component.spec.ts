import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidenciasComponent } from './residencias.component';

describe('ResidenciasComponent', () => {
  let component: ResidenciasComponent;
  let fixture: ComponentFixture<ResidenciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResidenciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
