import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { DealsService } from '../services/deals.service';

export const dealsResolver: ResolveFn<any> = (route, state) => {
  const dealsService = inject(DealsService);

  return dealsService.deals;
};
