import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-bar-mobile',
  templateUrl: './nav-bar-mobile.component.html',
  styleUrls: ['./nav-bar-mobile.component.scss'],
})
export class NavBarMobileComponent {
  openWindow: boolean = false;
  windowHeight: number = 0;
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    this.windowHeight = window.scrollY;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.windowHeight = window.scrollY;
  }

  onClick() {
    this.openWindow = !this.openWindow;
  }
}
