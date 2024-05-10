import {
  Component,
  OnDestroy,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { SingleProduct } from '../../interfaces/single-product';
import { AllProductsService } from '../../services/all-products.service';
import { ActivatedRoute } from '@angular/router';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  animations: [
    trigger('simpleFadeAnimation', [
      transition('* => *', [style({ opacity: 0 }), animate('0.6s')]),
    ]),
  ],
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  curRoute: string = '';
  allProds: SingleProduct[] = [];
  singleProd: SingleProduct[] = [];
  currentImage: WritableSignal<string> = signal('');
  idOfProd: WritableSignal<string> = signal('');
  sub: any;

  constructor(
    private allProductsService: AllProductsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.curRoute = this.activatedRoute.snapshot.url[0].path;
    this.sub = this.activatedRoute.params.subscribe((val) => {
      this.allProds = this.allProductsService.allProducts;
      this.idOfProd.set(this.activatedRoute.snapshot.url[1].path);
      let filtered = this.allProds.filter((id) => {
        return +this.idOfProd() === id.id;
      });
      this.singleProd = filtered;
      this.currentImage.set(this.singleProd[0].productImage);
    });
  }

  changeImage(img: string) {
    this.currentImage.set(img);
  }
}
