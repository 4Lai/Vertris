import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { RecommendedForYouService } from '../services/recommended-for-you.service';

export const recommendedForYouResolver: ResolveFn<any> = (route, state) => {
  const recForYouService = inject(RecommendedForYouService);
  
  return recForYouService.recommended;
};
