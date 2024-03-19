import { Injectable } from '@angular/core';
import { SingleProduct } from '../interfaces/single-product';

@Injectable({
  providedIn: 'root',
})
export class RecommendedForYouService {
  constructor() {}

  recommended: SingleProduct[] = [
    {
      productTitle: 'kolczyki 2.0 cm',
      type: 'pozłacany',
      price: 299,
      productImage: '../../../../assets/imgs/all-prods/ear2.jpg',
      id: 1002,
      discount: false,
      discountValue: 0,
      bestseller: true,
    },
    {
      productTitle: 'pierścień',
      type: 'srebrny z kamieniem',
      price: 189,
      productImage: '../../../../assets/imgs/all-prods/ring2.jpg',
      id: 2,
      discount: false,
      discountValue: 0,
      bestseller: true,
    },
    {
      productTitle: 'naszyjnik',
      type: 'korale',
      price: 269,
      productImage: '../../../../assets/imgs/all-prods/neck3.jpg',
      id: 10003,
      discount: false,
      discountValue: 0,
      bestseller: true,
    },
    {
      productTitle: 'naszyjnik',
      type: 'srebrny z kamieniem',
      price: 149,
      productImage: '../../../../assets/imgs/all-prods/neck5.jpg',
      id: 10005,
      discount: false,
      discountValue: 0,
      bestseller: true,
    },
    {
      productTitle: 'kolczyki',
      type: 'srebrny z cyrkoniami',
      price: 99,
      productImage: '../../../../assets/imgs/all-prods/ear12.jpg',
      id: 1012,
      discount: false,
      discountValue: 0,
      bestseller: true,
    },
  ];
}
