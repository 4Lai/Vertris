import { Injectable } from '@angular/core';
import { SingleProduct } from '../interfaces/single-product';

@Injectable({
  providedIn: 'root',
})
export class DealsService {
  constructor() {}

  deals: SingleProduct[] = [
    {
      productTitle: 'kolczyki',
      type: 'ozdobne',
      price: 139,
      productImage: '../../../../assets/imgs/all-prods/ear3.jpg',
      id: 1003,
      discount: true,
      discountValue: 40,
      bestseller: false,
    },
    {
      productTitle: 'pierścień zaręczynowy',
      type: 'srebrny z kamieniami',
      price: 899,
      productImage: '../../../../assets/imgs/all-prods/ring7.jpg',
      id: 7,
      discount: true,
      discountValue: 25,
      bestseller: false,
    },
    {
      productTitle: 'naszyjnik',
      type: 'pozłacany z kamieniem',
      price: 144,
      productImage: '../../../../assets/imgs/all-prods/neck7.jpg',
      id: 10007,
      discount: true,
      discountValue: 50,
      bestseller: false,
    },
    {
      productTitle: 'kolczyki',
      type: 'srebrny z kamieniem',
      price: 99,
      productImage: '../../../../assets/imgs/all-prods/ear9.jpg',
      id: 1009,
      discount: true,
      discountValue: 15,
      bestseller: false,
    },
    {
      productTitle: 'pierścień',
      type: 'złoty z kamieniami',
      price: 379,
      productImage: '../../../../assets/imgs/all-prods/ring5.jpg',
      id: 5,
      discount: true,
      discountValue: 44,
      bestseller: false,
    },
  ];
}
