import { Component, HostListener, OnInit } from '@angular/core';
import { NavBarService } from '../../services/nav-bar.service';
import { NavBar } from '../../interfaces/nav-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  curRoute: string = '';
  linksData: NavBar[] = [];
  windowHeight: number = 0;
  windowWidth: number = 0;
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    this.windowHeight = window.scrollY;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.windowWidth = window.innerWidth;
  }

  constructor(private navBarService: NavBarService, private router: Router) {}

  ngOnInit(): void {
    this.windowWidth = window.innerWidth;
    this.linksData = this.navBarService.navBarContent;
    this.curRoute = this.router.url;
  }

  routeAboutUs() {
    this.router.navigate(['o-nas'], { fragment: 'salon' });
  }
}
