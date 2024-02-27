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
      productImage: '../../../../assets/imgs/recommended/earings.jpg',
      id: 1,
      discount: false,
      discountValue: 0,
      bestseller: false,
    },
    {
      productTitle: 'pierścień',
      type: 'srebrny',
      price: 189,
      productImage: '../../../../assets/imgs/recommended/ring.jpg',
      id: 2,
      discount: false,
      discountValue: 0,
      bestseller: true,
    },
    {
      productTitle: 'pierścień',
      type: 'srebrny',
      price: 189,
      productImage: '../../../../assets/imgs/recommended/ring.jpg',
      id: 2,
      discount: false,
      discountValue: 0,
      bestseller: true,
    },
    {
      productTitle: 'pierścień',
      type: 'srebrny',
      price: 189,
      productImage: '../../../../assets/imgs/recommended/ring.jpg',
      id: 2,
      discount: false,
      discountValue: 0,
      bestseller: true,
    },
    {
      productTitle: 'pierścień',
      type: 'srebrny',
      price: 189,
      productImage: '../../../../assets/imgs/recommended/ring.jpg',
      id: 2,
      discount: false,
      discountValue: 0,
      bestseller: true,
    },
    {
      productTitle: 'pierścień',
      type: 'srebrny',
      price: 189,
      productImage: '../../../../assets/imgs/recommended/ring.jpg',
      id: 2,
      discount: false,
      discountValue: 0,
      bestseller: true,
    },
    {
      productTitle: 'pierścień',
      type: 'srebrny',
      price: 189,
      productImage: '../../../../assets/imgs/recommended/ring.jpg',
      id: 2,
      discount: false,
      discountValue: 0,
      bestseller: true,
    },
    {
      productTitle: 'pierścień',
      type: 'srebrny',
      price: 189,
      productImage: '../../../../assets/imgs/recommended/ring.jpg',
      id: 2,
      discount: false,
      discountValue: 0,
      bestseller: true,
    },
    {
      productTitle: 'kolczyki 2.0 cm',
      type: 'pozłacany',
      price: 299,
      productImage: '../../../../assets/imgs/recommended/earings.jpg',
      id: 1,
      discount: false,
      discountValue: 0,
      bestseller: false,
    },
  ];
}
