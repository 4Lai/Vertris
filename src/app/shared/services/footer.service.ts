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
        { subtitle: 'o firmie', link: '/o-nas', frag: 'o-firmie' },
        { subtitle: 'znajdź salon', link: '/o-nas', frag: 'salon' },
        { subtitle: 'kariera', link: '/o-nas', frag: 'kariera' },
      ],
    },
  ];

  offers: FooterSingle[] = [
    {
      title: 'oferty',
      data: [
        { subtitle: 'wszystkie produkty', link: '/produkty', frag: '' },
        { subtitle: 'nowości', link: '/nowości', frag: '' },
        { subtitle: 'zegarki', link: '/zegarki', frag: '' },
        { subtitle: 'kolczyki', link: '/kolczyki', frag: '' },
        { subtitle: 'pierścionki', link: '/pierścionki', frag: '' },
        { subtitle: 'naszyjniki', link: '/naszyjniki', frag: '' },
        { subtitle: 'karty podarunkowe', link: '/karty-podarunkowe', frag: '' },
        { subtitle: 'akcesoria', link: '/akcesoria', frag: '' },
      ],
    },
  ];

  customerService: FooterSingle[] = [
    {
      title: 'obsługa klienta',
      data: [
        {
          subtitle: 'formy dostawy i płatności',
          link: '/obsługa-klienta',
          frag: 'formy-dostawy-platnosci',
        },
        {
          subtitle: 'zwroty i reklamacje',
          link: '/obsługa-klienta',
          frag: 'zwroty',
        },
        { subtitle: 'FAQ', link: '/obsługa-klienta', frag: 'faq' },
      ],
    },
  ];

  contact: FooterSingle[] = [
    {
      title: 'kontakt',
      data: [
        { subtitle: '+48 999 999 999', link: '#', frag: '' },
        { subtitle: 'vertris@xxxx.com', link: '#', frag: '' },
      ],
    },
  ];

  regulations: FooterSingle[] = [
    {
      title: 'regulaminy',
      data: [
        {
          subtitle: 'regulamin sklepu internetowego',
          link: '/regulaminy',
          frag: 'regulamin-sklepu',
        },
        { subtitle: 'regulamin reklamacji', link: 'regulaminy', frag: 'regulamin-reklamacji' },
      ],
    },
  ];
}
