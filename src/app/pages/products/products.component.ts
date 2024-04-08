import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SingleProduct } from 'src/app/shared/interfaces/single-product';
import { AllProductsService } from 'src/app/shared/services/all-products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  allProdz: SingleProduct[] = [];
  shuffled: SingleProduct[] = [];
  title: string = '';
  isOpenedFilter: boolean = false;

  constructor(
    private allProd: AllProductsService,
    private activatedRoute: ActivatedRoute
  ) {}

  shuffleArray(array: SingleProduct[]) {
    let m = array.length,
      t,
      i;

    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }

  ngOnInit(): void {
    this.title = this.activatedRoute.snapshot.url[0].path;
    this.shuffled = this.shuffleArray(this.allProd.allProducts);
  }

  openPop(value: boolean) {
    this.isOpenedFilter = value;
  }

  filterArr(value: any) {
    this.shuffled = this.shuffleArray(this.allProd.allProducts);
    let filteredOffers = this.shuffled.filter((el) => {
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

    this.shuffled = filteredOffers;
  }
}
