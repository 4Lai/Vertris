import { TestBed } from '@angular/core/testing';

import { ReturnRegulationsService } from './return-regulations.service';

describe('ReturnRegulationsService', () => {
  let service: ReturnRegulationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReturnRegulationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
