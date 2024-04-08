import { FormControl } from '@angular/forms';

export interface FilterForm {
  priceFrom: FormControl<string | null>;
  priceTo: FormControl<string | null>;
  type: FormControl<string | null>;
  sale: FormControl<boolean | null>;
  bestseller: FormControl<boolean | null>;
}

export interface FilterFormValue {
  priceFrom: string | null;
  priceTo: string | null;
  type: string | null;
  sale: boolean | null;
  bestseller: boolean | null;
}
