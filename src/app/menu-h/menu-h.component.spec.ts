import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuHComponent } from './menu-h.component';

describe('MenuHComponent', () => {
  let component: MenuHComponent;
  let fixture: ComponentFixture<MenuHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
