import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-mobile',
  templateUrl: './nav-bar-mobile.component.html',
  styleUrls: ['./nav-bar-mobile.component.scss'],
})
export class NavBarMobileComponent implements OnInit {
  curRoute: string = ''
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

  constructor(private router:Router) {}

  ngOnInit(): void {
    this.curRoute = this.router.url
  }

  onClick() {
    this.openWindow = !this.openWindow;
  }
}
