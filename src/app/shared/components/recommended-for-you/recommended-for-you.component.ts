import { Component, OnInit, HostListener } from '@angular/core';
import { RecommendedForYouService } from '../../services/recommended-for-you.service';
import { SingleProduct } from '../../interfaces/single-product';

@Component({
  selector: 'app-recommended-for-you',
  templateUrl: './recommended-for-you.component.html',
  styleUrls: ['./recommended-for-you.component.scss'],
})
export class RecommendedForYouComponent implements OnInit {
  gridAutoColumnsPercentage: any;
  screenWidth: any;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    let grid = document.querySelector(
      '.single-product-container'
    ) as HTMLDivElement;
    if (this.screenWidth <= 500) {
      this.startPos = 1;
      this.curSlide = 1;
      this.gridAutoColumnsPercentage = 100;
      this.curPos = 0
      grid.style.transform = `translateX(${this.curPos}%)`;
    }
    if (this.screenWidth >= 501 && this.screenWidth <= 800) {
      this.startPos = 2;
      this.curSlide = 2;
      this.gridAutoColumnsPercentage = 50;
      this.curPos = 0;
      grid.style.transform = `translateX(${this.curPos}%)`;
    }
    if (this.screenWidth >= 801 && this.screenWidth <= 1200) {
      this.startPos = 3;
      this.curSlide = 3;
      this.gridAutoColumnsPercentage = 33.33;
      this.curPos = 0;
      grid.style.transform = `translateX(${this.curPos}%)`;
    }
    if (this.screenWidth >= 1201) {
      this.startPos = 4;
      this.curSlide = 4;
      this.gridAutoColumnsPercentage = 25;
      this.curPos = 0;
      grid.style.transform = `translateX(${this.curPos}%)`;
    }
  }
  startPos: number = 0;
  curPos: number = 0;
  curSlide: number = 0;
  numberOfItems: number = 0;
  recommendedProducts: SingleProduct[] = [];

  constructor(private recommended: RecommendedForYouService) {}

  ngOnInit(): void {
    this.recommendedProducts = this.recommended.recommended;
    this.numberOfItems = this.recommendedProducts.length;
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 500) {
      this.startPos = 1;
      this.curSlide = 1;
      this.gridAutoColumnsPercentage = 100;
    }
    if (this.screenWidth >= 501 && this.screenWidth <= 800) {
      this.startPos = 2;
      this.curSlide = 2;
      this.gridAutoColumnsPercentage = 50;
    }
    if (this.screenWidth >= 801 && this.screenWidth <= 1200) {
      this.startPos = 3;
      this.curSlide = 3;
      this.gridAutoColumnsPercentage = 33.33;
    }
    if (this.screenWidth >= 1201) {
      this.startPos = 4;
      this.curSlide = 4;
      this.gridAutoColumnsPercentage = 25;
    }
  }

  next() {
    this.curSlide++;
    let grid = document.querySelector(
      '.single-product-container'
    ) as HTMLDivElement;
    if (this.curSlide > this.numberOfItems) {
      this.curSlide = 0;
      this.curPos = 0;
      grid.style.transform = `translateX(${this.curPos}%)`;
    } else {
      this.curPos -= this.gridAutoColumnsPercentage;
      console.log(this.curPos);
      grid.style.transform = `translateX(${this.curPos}%)`;
    }
  }

  previous() {
    this.curSlide--;
    let grid = document.querySelector(
      '.single-product-container'
    ) as HTMLDivElement;
    if (this.curSlide < this.startPos) {
      this.curSlide = this.numberOfItems;
      this.curPos =
        (this.curSlide - this.startPos) * -this.gridAutoColumnsPercentage;
      grid.style.transform = `translateX(${this.curPos}%)`;
    } else {
      this.curPos += this.gridAutoColumnsPercentage;
      grid.style.transform = `translateX(${this.curPos}%)`;
    }
  }
}
