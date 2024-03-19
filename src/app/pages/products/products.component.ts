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
    this.shuffled = this.shuffleArray(this.allProd.allProducts)
    // this.allProdz = this.allProd.allProducts;
  }
}
