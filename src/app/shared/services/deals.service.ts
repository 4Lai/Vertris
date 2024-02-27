import { Injectable } from '@angular/core';
import { SingleProduct } from '../interfaces/single-product';

@Injectable({
  providedIn: 'root',
})
export class DealsService {
  constructor() {}

  deals: SingleProduct[] = [
    {
      productTitle: 'kolczyki 2.0 cm',
      type: 'pozłacany',
      price: 299,
      productImage: '../../../../assets/imgs/recommended/earings.jpg',
      id: 1,
      discount: true,
      discountValue: 20,
      bestseller: false,
    },
    {
      productTitle: 'pierścień',
      type: 'srebrny',
      price: 189,
      productImage: '../../../../assets/imgs/recommended/ring.jpg',
      id: 2,
      discount: true,
      discountValue: 20,
      bestseller: false,
    },
    {
      productTitle: 'pierścień',
      type: 'srebrny',
      price: 189,
      productImage: '../../../../assets/imgs/recommended/ring.jpg',
      id: 2,
      discount: true,
      discountValue: 20,
      bestseller: false,
    },
    {
      productTitle: 'pierścień',
      type: 'srebrny',
      price: 189,
      productImage: '../../../../assets/imgs/recommended/ring.jpg',
      id: 2,
      discount: true,
      discountValue: 20,
      bestseller: false,
    },
    {
      productTitle: 'pierścień',
      type: 'srebrny',
      price: 189,
      productImage: '../../../../assets/imgs/recommended/ring.jpg',
      id: 2,
      discount: true,
      discountValue: 20,
      bestseller: false,
    },
    {
      productTitle: 'pierścień',
      type: 'srebrny',
      price: 189,
      productImage: '../../../../assets/imgs/recommended/ring.jpg',
      id: 2,
      discount: true,
      discountValue: 20,
      bestseller: false,
    },
    {
      productTitle: 'pierścień',
      type: 'srebrny',
      price: 189,
      productImage: '../../../../assets/imgs/recommended/ring.jpg',
      id: 2,
      discount: true,
      discountValue: 20,
      bestseller: false,
    },
    {
      productTitle: 'pierścień',
      type: 'srebrny',
      price: 189,
      productImage: '../../../../assets/imgs/recommended/ring.jpg',
      id: 2,
      discount: true,
      discountValue: 20,
      bestseller: false,
    },
    {
      productTitle: 'kolczyki 2.0 cm',
      type: 'pozłacany',
      price: 299,
      productImage: '../../../../assets/imgs/recommended/earings.jpg',
      id: 1,
      discount: true,
      discountValue: 20,
      bestseller: false,
    },
  ];
}
