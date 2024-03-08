import { TestBed } from '@angular/core/testing';

import { AdventagesService } from './adventages.service';

describe('AdventagesService', () => {
  let service: AdventagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdventagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
