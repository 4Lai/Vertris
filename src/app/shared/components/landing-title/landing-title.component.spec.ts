import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingTitleComponent } from './landing-title.component';

describe('LandingTitleComponent', () => {
  let component: LandingTitleComponent;
  let fixture: ComponentFixture<LandingTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingTitleComponent]
    });
    fixture = TestBed.createComponent(LandingTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
