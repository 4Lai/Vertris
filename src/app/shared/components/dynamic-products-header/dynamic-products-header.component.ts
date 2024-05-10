import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dynamic-products-header',
  templateUrl: './dynamic-products-header.component.html',
  styleUrls: ['./dynamic-products-header.component.scss'],
})
export class DynamicProductsHeaderComponent {
  // curRoute: string = '';
  @Input() dynTitle: string = '';
  @Input() numberOfProds: number = 0;
  @Output() popUpOpened = new EventEmitter<boolean>();

  // ngOnChanges(changes: SimpleChanges): void {
  //   changes[this.router.url];
  //   this.curRoute = this.activatedRoute.snapshot.url[0].path;
  // }

  constructor(private activatedRoute:ActivatedRoute) {}

  openPopUp() {
    this.popUpOpened.emit(true);
  }
}
