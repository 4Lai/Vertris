import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss'],
})
export class SingleProductComponent implements OnInit {
  @Input() productTitle: string = '';
  @Input() type: string = '';
  @Input() price: number = 0;
  @Input() productImage: string = '';
  @Input() id: number = 0;
  @Input() discountValue: number = 0;
  @Input() discount: boolean = false;
  @Input() bestseller?: boolean = false;
  newPrice: any;

  ngOnInit(): void {
    this.newPrice = (this.price * (1 - (this.discountValue * 0.01)))
  }

}
