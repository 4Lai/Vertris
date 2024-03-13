import { Component, Input } from '@angular/core';
import { FooterSingle } from '../../interfaces/footer-single';

@Component({
  selector: 'app-footer-single-section',
  templateUrl: './footer-single-section.component.html',
  styleUrls: ['./footer-single-section.component.scss']
})
export class FooterSingleSectionComponent {
// @Input() title: string = ''
// @Input() subTitle: string = ''
// @Input() link: string = ''
@Input() array:FooterSingle[] = []
}
