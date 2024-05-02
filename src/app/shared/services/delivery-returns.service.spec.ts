import { TestBed } from '@angular/core/testing';

import { DeliveryReturnsService } from './delivery-returns.service';

describe('DeliveryReturnsService', () => {
  let service: DeliveryReturnsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliveryReturnsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
