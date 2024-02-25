import { TestBed } from '@angular/core/testing';

import { RecommendedForYouService } from './recommended-for-you.service';

describe('RecommendedForYouService', () => {
  let service: RecommendedForYouService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecommendedForYouService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
