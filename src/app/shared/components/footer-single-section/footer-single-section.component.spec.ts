import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSingleSectionComponent } from './footer-single-section.component';

describe('FooterSingleSectionComponent', () => {
  let component: FooterSingleSectionComponent;
  let fixture: ComponentFixture<FooterSingleSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterSingleSectionComponent]
    });
    fixture = TestBed.createComponent(FooterSingleSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
