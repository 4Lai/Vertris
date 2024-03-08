import { Injectable } from '@angular/core';
import { News } from '../interfaces/news';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor() {}

  newsArr: News[] = [
    {
      productTitle: 'kolczyki',
      type: 'złoty',
      price: 549,
      productImage: '../assets/imgs/news/news1.jpg',
      id: 1,
    },
    {
      productTitle: 'naszyjnik',
      type: 'złoty',
      price: 179,
      productImage: '../assets/imgs/news/news2.jpg',
      id: 2,
    },
    {
      productTitle: 'pierścień',
      type: 'złoty',
      price: 249,
      productImage: '../assets/imgs/news/news3.jpg',
      id: 3,
    },
    {
      productTitle: 'pierścień',
      type: 'złoty',
      price: 319,
      productImage: '../assets/imgs/news/news4.jpg',
      id: 4,
    },
  ];
}
