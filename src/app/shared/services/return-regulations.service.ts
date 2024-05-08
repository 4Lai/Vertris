import { Injectable, signal } from '@angular/core';
import { Regulations } from '../interfaces/regulations';

@Injectable({
  providedIn: 'root',
})
export class ReturnRegulationsService {
  readonly returnRegulationsData = signal<any[]>([]);

  constructor() {}

  getReturnRegulationsData() {
    const returnRegulationsData: Regulations[] = [
      {
        title: 'regulamin reklamacji',
        data: [
          {
            regulation:
              'lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, pariatur.',
          },
          {
            regulation:
              'lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet asperiores, cumque beatae, quaerat consequuntur corrupti cupiditate praesentium deserunt sint quae, eos autem ducimus voluptatem dolores fuga tempore nulla! Quos quia dignissimos fuga obcaecati voluptatibus repellat.',
          },
          {
            regulation:
              'lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, a cumque! Praesentium aperiam similique fugiat sunt, rem alias pariatur voluptas.',
          },
          {
            regulation:
              'lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quae minima vitae blanditiis libero et nostrum iure soluta voluptates.',
          },
          {
            regulation:
              'lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolor corrupti fuga veritatis temporibus suscipit culpa, alias porro eius mollitia, corporis nulla provident voluptate. Cupiditate sint earum vel repellendus odio quisquam totam ipsum excepturi, doloribus eos, velit, delectus repellat incidunt?',
          },
          {
            regulation:
              'lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, a cumque! Praesentium aperiam similique fugiat sunt, rem alias pariatur voluptas.',
          },
          {
            regulation:
              'lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolor corrupti fuga veritatis temporibus suscipit culpa, alias porro eius mollitia, corporis nulla provident voluptate. Cupiditate sint earum vel repellendus odio quisquam totam ipsum excepturi, doloribus eos, velit, delectus repellat incidunt?',
          },
        ],
      },
    ];

    this.returnRegulationsData.set(returnRegulationsData);
  }
}
