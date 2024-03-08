import { Injectable } from '@angular/core';
import { Adventages } from '../interfaces/adventages';

@Injectable({
  providedIn: 'root',
})
export class AdventagesService {
  constructor() {}

  adventagesArr: Adventages[] = [
    { text: 'darmowa dostawa od 150 zł', iconN: 'local_shipping' },
    { text: 'darmowe zwroty', iconN: 'cycle' },
    { text: 'ozdobne pakowania', iconN: 'featured_seasonal_and_gifts' },
    { text: 'bezpieczna płatność', iconN: 'credit_card' },
    { text: 'możliwość grawerowania biżuterii', iconN: 'edit' },
  ];
}
