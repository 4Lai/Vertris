import { TestBed } from '@angular/core/testing';

import { NecklaceService } from './necklace.service';

describe('NecklaceService', () => {
  let service: NecklaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NecklaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
