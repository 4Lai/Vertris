import { TestBed } from '@angular/core/testing';

import { EaringsService } from './earings.service';

describe('EaringsService', () => {
  let service: EaringsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EaringsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
