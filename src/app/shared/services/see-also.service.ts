import { Injectable } from '@angular/core';
import { SeeAlsoSingle } from '../interfaces/see-also-single';

@Injectable({
  providedIn: 'root',
})
export class SeeAlsoService {
  constructor() {}

  seeAlsoArr: SeeAlsoSingle[] = [
    {
      imgUrl: '../assets/imgs/see-also/watch.jpg',
      title: 'zegarki',
      path: '/zegarki'
    },
    {
      imgUrl: '../assets/imgs/see-also/wallet2.jpg',
      title: 'akcesoria',
      path: '/akcesoria'
    },
  ];
}
