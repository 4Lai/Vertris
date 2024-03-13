import { Injectable } from '@angular/core';
import { FooterSingle } from '../interfaces/footer-single';

@Injectable({
  providedIn: 'root',
})
export class FooterService {
  constructor() {}

  aboutUs: FooterSingle[] = [
    {
      title: 'o nas',
      data: [
        { subtitle: 'o firmie', link: '/o-nas' },
        { subtitle: 'znajdź salon', link: '/o-nas' },
        { subtitle: 'kariera', link: '/o-nas' },
      ],
    },
  ];

  offers: FooterSingle[] = [
    {
      title: 'oferty',
      data: [
        { subtitle: 'wszystkie produkty', link: '/produkty' },
        { subtitle: 'nowości', link: '/produkty' },
        { subtitle: 'zegarki', link: '/produkty' },
        { subtitle: 'kolczyki', link: '/produkty' },
        { subtitle: 'pierścionki', link: '/produkty' },
        { subtitle: 'naszyjniki', link: '/produkty' },
        { subtitle: 'karty podarunkowe', link: '/produkty' },
        { subtitle: 'akcesoria', link: '/produkty' },
      ],
    },
  ];

  customerService: FooterSingle[] = [
    {
      title: 'obsługa klienta',
      data: [
        { subtitle: 'formy dostawy i płatności', link: '/obsługa-klienta' },
        { subtitle: 'zwroty i reklamacje', link: '/obsługa-klienta' },
        { subtitle: 'FAQ', link: '/obsługa-klienta' },
      ],
    },
  ];

  contact: FooterSingle[] = [
    {
      title: 'kontakt',
      data: [
        { subtitle: '+48 999 999 999', link: '#' },
        { subtitle: 'vertris@xxxx.com', link: '#' },
      ],
    },
  ];

  regulations: FooterSingle[] = [
    {
      title: 'regulaminy',
      data: [
        { subtitle: 'regulamin sklepu internetowego', link: '/regulaminy' },
        { subtitle: 'regulamin reklamacji', link: 'regulaminy' },
      ],
    },
  ];
}
