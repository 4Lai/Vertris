import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dynamic-products-header',
  templateUrl: './dynamic-products-header.component.html',
  styleUrls: ['./dynamic-products-header.component.scss'],
})
export class DynamicProductsHeaderComponent {
  @Input() dynTitle: string = '';
  @Input() numberOfProds: number = 0;
  @Output() popUpOpened = new EventEmitter<boolean>();

  openPopUp() {
    this.popUpOpened.emit(true);
  }
}
