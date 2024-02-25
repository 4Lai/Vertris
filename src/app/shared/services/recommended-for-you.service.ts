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
      price: '299,00',
      productImage: '../../../../assets/imgs/recommended/earings.jpg',
      id: 1,
    },
    {
      productTitle: 'pierścień',
      type: 'srebrny',
      price: '189,00',
      productImage: '../../../../assets/imgs/recommended/ring.jpg',
      bestseller: true,
      id: 2,
    },
    {
      productTitle: 'pierścień',
      type: 'srebrny',
      price: '189,00',
      productImage: '../../../../assets/imgs/recommended/ring.jpg',
      bestseller: true,
      id: 2,
    },
    {
      productTitle: 'pierścień',
      type: 'srebrny',
      price: '189,00',
      productImage: '../../../../assets/imgs/recommended/ring.jpg',
      bestseller: true,
      id: 2,
    },
    {
      productTitle: 'pierścień',
      type: 'srebrny',
      price: '189,00',
      productImage: '../../../../assets/imgs/recommended/ring.jpg',
      bestseller: true,
      id: 2,
    },
    {
      productTitle: 'pierścień',
      type: 'srebrny',
      price: '189,00',
      productImage: '../../../../assets/imgs/recommended/ring.jpg',
      bestseller: true,
      id: 2,
    },
    {
      productTitle: 'pierścień',
      type: 'srebrny',
      price: '189,00',
      productImage: '../../../../assets/imgs/recommended/ring.jpg',
      bestseller: true,
      id: 2,
    },
    {
      productTitle: 'pierścień',
      type: 'srebrny',
      price: '189,00',
      productImage: '../../../../assets/imgs/recommended/ring.jpg',
      bestseller: true,
      id: 2,
    },
    {
      productTitle: 'kolczyki 2.0 cm',
      type: 'pozłacany',
      price: '299,00',
      productImage: '../../../../assets/imgs/recommended/earings.jpg',
      id: 1,
    },
  ];
}
