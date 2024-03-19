import { Component, Input, OnInit } from '@angular/core';
import { SingleProduct } from '../../interfaces/single-product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @Input() prodArr: SingleProduct[] = [];
  currentPage: number = 1;
  elPerPage: number = 9;
  elDisplayed: number = 0;
  maxPages: number = 0;
  newProdsArr: SingleProduct[] = [];

  ngOnInit(): void {
    this.maxPages = Math.ceil(this.prodArr.length / this.elPerPage);
    this.newProdsArr = this.prodArr;
    this.elDisplayed = this.elPerPage;
    if (this.currentPage === 1) {
      this.newProdsArr = this.newProdsArr.slice(0, this.elPerPage);
    }
  }

  lastPage(page: number) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.currentPage = page;
    this.newProdsArr = this.prodArr;
    this.newProdsArr = this.newProdsArr.slice(
      (page - 1) * this.elPerPage,
      page * this.elPerPage + this.elPerPage
    );
  }

  nextPage(page: number) {
    if (this.currentPage <= this.maxPages - 1) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      this.newProdsArr = this.prodArr;
      this.currentPage = page + 1;
      this.elDisplayed = this.elPerPage * page;
      this.newProdsArr = this.newProdsArr.slice(
        this.elDisplayed,
        this.elDisplayed + this.elPerPage
      );
    }
  }

  previousPage(page: number) {
    if (this.currentPage >= 2) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      this.newProdsArr = this.prodArr;
      this.currentPage = page - 1;
      this.elDisplayed = this.elPerPage * this.currentPage;
      this.newProdsArr = this.newProdsArr.slice(
        this.elDisplayed - this.elPerPage,
        this.elDisplayed
      );
    }
  }
}
