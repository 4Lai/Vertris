import { Injectable } from '@angular/core';
import { SingleProduct } from '../interfaces/single-product';

@Injectable({
  providedIn: 'root',
})
export class GiftsService {
  constructor() {}

  giftsData: SingleProduct[] = [
    {
      productTitle: 'karta podarunkowa',
      type: 'elektroniczna',
      price: 100,
      productImage: '../../../../assets/imgs/all-prods/gift1.png',
      id: 10000001,
      discountValue: 0,
      discount: false,
      bestseller: false,
      path: 'karty',
    },
    {
      productTitle: 'karta podarunkowa',
      type: 'elektroniczna',
      price: 250,
      productImage: '../../../../assets/imgs/all-prods/gift1.png',
      id: 10000002,
      discountValue: 0,
      discount: false,
      bestseller: true,
      path: 'karty',
    },
    {
      productTitle: 'karta podarunkowa',
      type: 'elektroniczna',
      price: 500,
      productImage: '../../../../assets/imgs/all-prods/gift1.png',
      id: 10000003,
      discountValue: 0,
      discount: false,
      bestseller: false,
      path: 'karty',
    },
  ];
}
