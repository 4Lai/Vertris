import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { dealsResolver } from './deals.resolver';

describe('dealsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => dealsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
