import { Injectable, signal } from '@angular/core';
import { Regulations } from '../interfaces/regulations';

@Injectable({
  providedIn: 'root',
})
export class ShopRegulationsService {
  readonly shopData = signal<any>([]);

  constructor() {}

  getShopRegulationsData() {
    const shopRegulationsData: Regulations[] = [
      {
        title: 'regulamin sklepu internetowego',
        data: [
          {
            regulation:
              'lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatem fugiat error sunt voluptates illum sequi quos quo autem quidem, excepturi laborum velit quibusdam exercitationem dolore facilis voluptas eaque est? Facilis voluptate sint voluptatem provident porro necessitatibus perspiciatis quaerat omnis incidunt nostrum eius, saepe quos repellendus, aspernatur harum amet nemo.',
          },
          {
            regulation:
              'lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ducimus error quod, fugiat eligendi ipsa placeat dolore? Consequuntur nam quam quod impedit sunt vero voluptas et laboriosam, numquam illo natus?',
          },
          {
            regulation:
              'lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatem fugiat error sunt voluptates illum sequi quos quo autem quidem, excepturi laborum velit quibusdam exercitationem dolore facilis voluptas eaque est? Facilis voluptate sint voluptatem provident porro necessitatibus perspiciatis quaerat omnis incidunt nostrum eius, saepe quos repellendus, aspernatur harum amet nemo.',
          },
          {
            regulation:
              'lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ducimus error quod, fugiat eligendi ipsa placeat dolore? Consequuntur nam quam quod impedit sunt vero voluptas et laboriosam, numquam illo natus?',
          },
          {
            regulation:
              'lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae officia laudantium ipsa optio est ducimus.',
          },
          {
            regulation:
              'lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatem fugiat error sunt voluptates illum sequi quos quo autem quidem, excepturi laborum velit quibusdam exercitationem dolore facilis voluptas eaque est? Facilis voluptate sint voluptatem provident porro necessitatibus perspiciatis quaerat omnis incidunt nostrum eius, saepe quos repellendus, aspernatur harum amet nemo.',
          },
          {
            regulation:
              'lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, reprehenderit! Accusantium, et, aspernatur hic aperiam mollitia error, in non fugiat sapiente eum quaerat modi nisi quam facilis quasi? Totam minima ipsum tempore, magnam vero dolorem.',
          },
        ],
      },
    ];

    this.shopData.set(shopRegulationsData);
  }
}
