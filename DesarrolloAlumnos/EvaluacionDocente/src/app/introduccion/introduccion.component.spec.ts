import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroduccionComponent } from './introduccion.component';

describe('IntroduccionComponent', () => {
  let component: IntroduccionComponent;
  let fixture: ComponentFixture<IntroduccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroduccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroduccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
