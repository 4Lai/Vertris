import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-product-list',
  templateUrl: './single-product-list.component.html',
  styleUrls: ['./single-product-list.component.scss'],
})
export class SingleProductListComponent implements OnInit{
  @Input() productTitle: string = '';
  @Input() type: string = '';
  @Input() price: number = 0;
  @Input() productImage: string = '';
  @Input() id: number = 0;
  @Input() discountValue: number = 0;
  @Input() discount: boolean = false;
  @Input() bestseller: boolean = false;
  newPrice: any;

  ngOnInit(): void {
    this.newPrice = this.price * (1 - this.discountValue * 0.01);
  }
}
