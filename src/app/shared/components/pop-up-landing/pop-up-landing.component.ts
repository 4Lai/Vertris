import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pop-up-landing',
  templateUrl: './pop-up-landing.component.html',
  styleUrls: ['./pop-up-landing.component.scss']
})
export class PopUpLandingComponent {
  @Input() title: string = ''

}
