import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-adventages',
  templateUrl: './icon-adventages.component.html',
  styleUrls: ['./icon-adventages.component.scss'],
})
export class IconAdventagesComponent {
  @Input() iconName: string = '';
  @Input() title: string = ''
}
