import { Injectable } from '@angular/core';
import { SingleProduct } from '../interfaces/single-product';

@Injectable({
  providedIn: 'root',
})
export class EaringsService {
  constructor() {}

  earingsData: SingleProduct[] = [
    {
      productTitle: 'kolczyki',
      type: 'złoty',
      price: 549,
      productImage: '../../../../assets/imgs/all-prods/ear1.jpg',
      id: 1001,
      discountValue: 0,
      discount: false,
      bestseller: false,
      path: 'kolczyki',
    },
    {
      productTitle: 'kolczyki 2.0 cm',
      type: 'pozłacany',
      price: 299,
      productImage: '../../../../assets/imgs/all-prods/ear2.jpg',
      id: 1002,
      discountValue: 0,
      discount: false,
      bestseller: true,
      path: 'kolczyki',
    },
    {
      productTitle: 'kolczyki',
      type: 'ozdobne',
      price: 139,
      productImage: '../../../../assets/imgs/all-prods/ear3.jpg',
      id: 1003,
      discountValue: 40,
      discount: true,
      bestseller: false,
      path: 'kolczyki',
    },
    {
      productTitle: 'kolczyki',
      type: 'srebrne z kamieniem',
      price: 214,
      productImage: '../../../../assets/imgs/all-prods/ear4.jpg',
      id: 1004,
      discountValue: 0,
      discount: false,
      bestseller: false,
      path: 'kolczyki',
    },
    {
      productTitle: 'kolczyki',
      type: 'pozłacane',
      price: 119,
      productImage: '../../../../assets/imgs/all-prods/ear5.jpg',
      id: 1005,
      discountValue: 0,
      discount: false,
      bestseller: false,
      path: 'kolczyki',
    },
    {
      productTitle: 'kolczyki',
      type: 'cyrkonia',
      price: 69,
      productImage: '../../../../assets/imgs/all-prods/ear6.jpg',
      id: 1006,
      discountValue: 0,
      discount: false,
      bestseller: false,
      path: 'kolczyki',
    },
    {
      productTitle: 'kolczyki',
      type: 'cyrkonia',
      price: 99,
      productImage: '../../../../assets/imgs/all-prods/ear7.jpg',
      id: 1007,
      discountValue: 0,
      discount: false,
      bestseller: false,
      path: 'kolczyki',
    },
    {
      productTitle: 'kolczyki',
      type: 'złoto z ametystem',
      price: 459,
      productImage: '../../../../assets/imgs/all-prods/ear8.jpg',
      id: 1008,
      discountValue: 0,
      discount: false,
      bestseller: false,
      path: 'kolczyki',
    },
    {
      productTitle: 'kolczyki',
      type: 'srebrny z kamieniem',
      price: 179,
      productImage: '../../../../assets/imgs/all-prods/ear9.jpg',
      id: 1009,
      discountValue: 15,
      discount: true,
      bestseller: false,
      path: 'kolczyki',
    },
    {
      productTitle: 'kolczyki',
      type: 'niebieski metal',
      price: 389,
      productImage: '../../../../assets/imgs/all-prods/ear10.jpg',
      id: 1010,
      discountValue: 0,
      discount: false,
      bestseller: false,
      path: 'kolczyki',
    },
    {
      productTitle: 'okrągłe kolczyki',
      type: 'pozłacane',
      price: 119,
      productImage: '../../../../assets/imgs/all-prods/ear11.jpg',
      id: 1011,
      discountValue: 0,
      discount: false,
      bestseller: false,
      path: 'kolczyki',
    },
    {
      productTitle: 'kolczyki',
      type: 'srebrnry z cyrkoniami',
      price: 99,
      productImage: '../../../../assets/imgs/all-prods/ear12.jpg',
      id: 1012,
      discountValue: 0,
      discount: false,
      bestseller: true,
      path: 'kolczyki',
    },
    {
      productTitle: 'kolczyki',
      type: 'srebrnry z kamieniami',
      price: 139,
      productImage: '../../../../assets/imgs/all-prods/ear13.jpg',
      id: 1013,
      discountValue: 0,
      discount: false,
      bestseller: false,
      path: 'kolczyki',
    },
  ];
}
