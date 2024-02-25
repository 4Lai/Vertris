import { Component, OnInit } from '@angular/core';
import { RecommendedForYouService } from '../../services/recommended-for-you.service';
import { SingleProduct } from '../../interfaces/single-product';

@Component({
  selector: 'app-recommended-for-you',
  templateUrl: './recommended-for-you.component.html',
  styleUrls: ['./recommended-for-you.component.scss'],
})
export class RecommendedForYouComponent implements OnInit {
  curPos: number = 0;
  curSlide: number = 4;
  numberOfItems: number = 0;
  recommendedProducts: SingleProduct[] = [];

  constructor(private recommended: RecommendedForYouService) {}

  ngOnInit(): void {
    this.recommendedProducts = this.recommended.recommended;
    this.numberOfItems = this.recommendedProducts.length;
  }

  next() {
    this.curSlide++;
    let grid = document.querySelector(
      '.single-product-container'
    ) as HTMLDivElement;
    if (this.curSlide > this.numberOfItems) {
      this.curSlide = 4;
      this.curPos = 0;
      grid.style.transform = 'translateX(0%)';
    } else {
      this.curPos -= 25;
      grid.style.transform = `translateX(${this.curPos}%)`;
    }
  }
  previous() {
    this.curSlide--;
    let grid = document.querySelector(
      '.single-product-container'
    ) as HTMLDivElement;
    if (this.curSlide < 4) {
      this.curSlide = this.numberOfItems;
      this.curPos = (this.curSlide - 4) * -25;
      grid.style.transform = `translateX(${this.curPos}%)`;
    } else {
      this.curPos += 25;
      grid.style.transform = `translateX(${this.curPos}%)`;
    }
  }
}
