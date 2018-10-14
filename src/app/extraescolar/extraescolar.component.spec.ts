import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraescolarComponent } from './extraescolar.component';

describe('ExtraescolarComponent', () => {
  let component: ExtraescolarComponent;
  let fixture: ComponentFixture<ExtraescolarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtraescolarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraescolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
