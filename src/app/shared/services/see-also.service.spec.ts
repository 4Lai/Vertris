import { TestBed } from '@angular/core/testing';

import { SeeAlsoService } from './see-also.service';

describe('SeeAlsoService', () => {
  let service: SeeAlsoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeeAlsoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
