import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-see-also-single',
  templateUrl: './see-also-single.component.html',
  styleUrls: ['./see-also-single.component.scss'],
})
export class SeeAlsoSingleComponent {
  @Input() title: string = '';
  @Input() imgUrl: string = '';
  @Input() path: string = ''

}
