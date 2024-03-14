import { Component, Input, OnInit } from '@angular/core';
import { NavBar } from '../../interfaces/nav-bar';
import { NavBarService } from '../../services/nav-bar.service';

@Component({
  selector: 'app-nav-bar-mobile-pop-up',
  templateUrl: './nav-bar-mobile-pop-up.component.html',
  styleUrls: ['./nav-bar-mobile-pop-up.component.scss'],
})
export class NavBarMobilePopUpComponent implements OnInit {
  @Input() hidden: boolean = false;
  dataArr: NavBar[] = [];

  constructor(private navBarService: NavBarService) {}

  ngOnInit(): void {
    this.dataArr = this.navBarService.navBarContent;
  }
}
