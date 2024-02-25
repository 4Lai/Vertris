import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss'],
})
export class SingleProductComponent {
  @Input() productTitle: string = '';
  @Input() type: string = '';
  @Input() price: string = '';
  @Input() productImage: string = '';
  @Input() bestseller?: boolean = false;
}
