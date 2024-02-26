import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { recommendedForYouResolver } from './recommended-for-you.resolver';

describe('recommendedForYouResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => recommendedForYouResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
