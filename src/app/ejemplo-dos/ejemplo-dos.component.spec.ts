import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploDosComponent } from './ejemplo-dos.component';

describe('EjemploDosComponent', () => {
  let component: EjemploDosComponent;
  let fixture: ComponentFixture<EjemploDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjemploDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemploDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
