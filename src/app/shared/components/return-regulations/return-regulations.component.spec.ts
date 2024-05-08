import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnRegulationsComponent } from './return-regulations.component';

describe('ReturnRegulationsComponent', () => {
  let component: ReturnRegulationsComponent;
  let fixture: ComponentFixture<ReturnRegulationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReturnRegulationsComponent]
    });
    fixture = TestBed.createComponent(ReturnRegulationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
