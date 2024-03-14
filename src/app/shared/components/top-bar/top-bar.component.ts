import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  // @HostListener('window:scroll', ['$event'])
  // onScroll(event: any) {
  //   let topBar = document.querySelector('.top-bar-container') as HTMLDivElement;
  //   if (window.scrollY > topBar.clientHeight) {
  //     topBar.style.position = 'fixed';
  //     topBar.style.backgroundColor = 'white'
  //   } else {
  //     topBar.style.position = 'static';
  //   }
  // }
  ngOnInit(): void {}
}
