import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarMobilePopUpComponent } from './nav-bar-mobile-pop-up.component';

describe('NavBarMobilePopUpComponent', () => {
  let component: NavBarMobilePopUpComponent;
  let fixture: ComponentFixture<NavBarMobilePopUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarMobilePopUpComponent]
    });
    fixture = TestBed.createComponent(NavBarMobilePopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
