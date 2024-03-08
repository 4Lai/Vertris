import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-news-single',
  templateUrl: './news-single.component.html',
  styleUrls: ['./news-single.component.scss'],
})
export class NewsSingleComponent {
  @Input() title: string = '';
  @Input() type: string = '';
  @Input() price: number = 0;
  @Input() img: string = '';
  @Input() id: number = 0;
  @Input() reversed: number = 0;
}
