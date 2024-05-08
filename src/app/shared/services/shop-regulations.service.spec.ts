import { TestBed } from '@angular/core/testing';

import { ShopRegulationsService } from './shop-regulations.service';

describe('ShopRegulationsService', () => {
  let service: ShopRegulationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopRegulationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
