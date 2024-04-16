import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SingleProduct } from 'src/app/shared/interfaces/single-product';
import { AllProductsService } from 'src/app/shared/services/all-products.service';

@Component({
  selector: 'app-single-product-details',
  templateUrl: './single-product-details.component.html',
  styleUrls: ['./single-product-details.component.scss'],
})
export class SingleProductDetailsComponent implements OnInit, OnDestroy {
  prodId: string = '';
  allProds: SingleProduct[] = [];
  newRecProds: SingleProduct[] = [];
  sub: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private allProductsService: AllProductsService
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

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe((val) => {
      this.prodId = this.activatedRoute.snapshot.url[1].path;
      this.allProds = this.allProductsService.allProducts;
      this.newRecProds = this.allProds.filter((el) => {
        return el.id != +this.prodId;
      });
      this.shuffleArray(this.newRecProds);
      let shuffled = this.newRecProds.slice(0, 5);
      this.newRecProds = shuffled;
    });
  }
}
