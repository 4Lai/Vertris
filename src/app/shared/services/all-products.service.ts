import { Injectable } from '@angular/core';
import { EaringsService } from './earings.service';
import { RingsService } from './rings.service';
import { NecklaceService } from './necklace.service';
import { WatchesService } from './watches.service';
import { SingleProduct } from '../interfaces/single-product';
import { AccessoriesService } from './accessories.service';
import { GiftsService } from './gifts.service';

@Injectable({
  providedIn: 'root',
})
export class AllProductsService {
  constructor(
    private ringsService: RingsService,
    private earingsService: EaringsService,
    private necklaceSerice: NecklaceService,
    private watchesService: WatchesService,
    private accessoriesService: AccessoriesService,
    private giftService: GiftsService
  ) {}

  allProducts: SingleProduct[] = [
    ...this.ringsService.ringsData,
    ...this.earingsService.earingsData,
    ...this.necklaceSerice.neckData,
    ...this.watchesService.watchesData,
    ...this.accessoriesService.accData,
    ...this.giftService.giftsData
  ];
}
