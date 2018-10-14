import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrefichaPagoComponent } from './preficha-pago.component';

describe('PrefichaPagoComponent', () => {
  let component: PrefichaPagoComponent;
  let fixture: ComponentFixture<PrefichaPagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrefichaPagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrefichaPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
