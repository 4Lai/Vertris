import { Injectable } from '@angular/core';
import { NavBar } from '../interfaces/nav-bar';

@Injectable({
  providedIn: 'root',
})
export class NavBarService {
  constructor() {}

  navBarContent: NavBar[] = [
    { link: '/produkty', text: 'wszystkie produkty' },
    { link: '/nowości', text: 'nowości' },
    { link: '/naszyjniki', text: 'naszyjniki' },
    { link: '/kolczyki', text: 'kolczyki' },
    { link: '/pierścienie', text: 'pierścienie' },
    { link: '/zegarki', text: 'zegarki' },
    { link: '/karty-podarunkowe', text: 'karty podarunkowe' },
    { link: '/akcesoria', text: 'akcesoria' },
  ];
}
