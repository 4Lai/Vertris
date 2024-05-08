import { Component, OnInit } from '@angular/core';
import { ShopRegulationsService } from '../../services/shop-regulations.service';

@Component({
  selector: 'app-shop-regulations',
  templateUrl: './shop-regulations.component.html',
  styleUrls: ['./shop-regulations.component.scss'],
})
export class ShopRegulationsComponent implements OnInit {
  regulationsArr = this.shopRegulationsService.shopData.asReadonly()

  constructor(private shopRegulationsService: ShopRegulationsService) {}

  ngOnInit(): void {
    this.shopRegulationsService.getShopRegulationsData();
  }

}
