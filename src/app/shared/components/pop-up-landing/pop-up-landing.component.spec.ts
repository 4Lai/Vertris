import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpLandingComponent } from './pop-up-landing.component';

describe('PopUpLandingComponent', () => {
  let component: PopUpLandingComponent;
  let fixture: ComponentFixture<PopUpLandingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopUpLandingComponent]
    });
    fixture = TestBed.createComponent(PopUpLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
