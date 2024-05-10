import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SingleProduct } from 'src/app/shared/interfaces/single-product';
import { AllProductsService } from 'src/app/shared/services/all-products.service';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss'],
})
export class NewsPageComponent implements OnInit {
  newsPageArr: SingleProduct[] = [];
  title: string = '';
  // subtitle: string = '';
  isOpenedFilter: boolean = false;

  constructor(
    private allProductsService: AllProductsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.title = this.activatedRoute.snapshot.url[0].path;
    if (this.activatedRoute.snapshot.url.length === 2) {
      let filterDataYoshitsu = this.allProductsService.allProducts.filter(
        (val) => {
          return val.yoshitsu === true;
        }
      );
      this.newsPageArr = filterDataYoshitsu;
    } else {
      let filterData = this.allProductsService.allProducts.filter((val) => {
        return val.newCollection === true;
      });

      this.newsPageArr = filterData;
    }
  }

  openPop(value: boolean) {
    this.isOpenedFilter = value;
  }

  filterArr(value: any) {
    // this.neckArr = this.necklacesService.neckData;
    let filterData = this.allProductsService.allProducts.filter((val) => {
      return val.newCollection === true;
    });

    this.newsPageArr = filterData;
    let filteredOffers = this.newsPageArr.filter((el) => {
      let match = [];
      if (value.type) {
        if (el.type === value.type) {
          match.push(true);
        } else {
          match.push(false);
        }
      }
      if (value.bestseller) {
        if (el.bestseller === value.bestseller) {
          match.push(true);
        } else {
          match.push(false);
        }
      }
      if (value.sale) {
        if (el.discount === value.sale) {
          match.push(true);
        } else {
          match.push(false);
        }
      }
      if (value.priceFrom) {
        if (el.price > value.priceFrom) {
          match.push(true);
        } else {
          match.push(false);
        }
      }
      if (value.priceTo) {
        if (el.price < value.priceTo) {
          match.push(true);
        } else {
          match.push(false);
        }
      }
      let isNotMatched = match.some((val) => {
        return val === false;
      });
      return isNotMatched ? null : el;
    });

    this.newsPageArr = filteredOffers;
  }
}
