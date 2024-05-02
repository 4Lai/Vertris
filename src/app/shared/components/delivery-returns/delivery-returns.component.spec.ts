import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryReturnsComponent } from './delivery-returns.component';

describe('DeliveryReturnsComponent', () => {
  let component: DeliveryReturnsComponent;
  let fixture: ComponentFixture<DeliveryReturnsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliveryReturnsComponent]
    });
    fixture = TestBed.createComponent(DeliveryReturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
