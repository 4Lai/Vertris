import { TestBed } from '@angular/core/testing';

import { RingsService } from './rings.service';

describe('RingsService', () => {
  let service: RingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
