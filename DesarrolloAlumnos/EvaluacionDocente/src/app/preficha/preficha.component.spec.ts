import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrefichaComponent } from './preficha.component';

describe('PrefichaComponent', () => {
  let component: PrefichaComponent;
  let fixture: ComponentFixture<PrefichaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrefichaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrefichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
