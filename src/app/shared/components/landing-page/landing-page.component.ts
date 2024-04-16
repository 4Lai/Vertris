import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements AfterViewInit, AfterViewChecked {
  screenWidth: any;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    let rings = document.querySelector('.rings') as HTMLElement;
    let earings = document.querySelector('.earings') as HTMLElement;
    if (this.screenWidth <= 1230) {
      rings.removeEventListener('mouseover', this.onHover);
      rings.removeEventListener('mouseleave', this.onLeave);
      earings.removeEventListener('mouseover', this.onHover2);
      earings.removeEventListener('mouseleave', this.onLeave);
      let right = document.querySelector(
        '.landing-page_right'
      ) as HTMLDivElement;
      right.style.width = '100%';
    } else {
      rings.addEventListener('mouseover', this.onHover);
      rings.addEventListener('mouseleave', this.onLeave);
      earings.addEventListener('mouseover', this.onHover2);
      earings.addEventListener('mouseleave', this.onLeave);
      let right = document.querySelector(
        '.landing-page_right'
      ) as HTMLDivElement;
      right.style.width = '50%';
    }
  }

  constructor() {}

  ngAfterViewChecked(): void {
    this.screenWidth = window.innerWidth;
    let rings = document.querySelector('.rings') as HTMLElement;
    let earings = document.querySelector('.earings') as HTMLElement;
    if (this.screenWidth >= 1230) {
      rings.addEventListener('mouseover', this.onHover);
      rings.addEventListener('mouseleave', this.onLeave);
      earings.addEventListener('mouseover', this.onHover2);
      earings.addEventListener('mouseleave', this.onLeave);
    }
  }

  ngAfterViewInit(): void {
    this.screenWidth = window.innerWidth;
    let rings = document.querySelector('.rings') as HTMLElement;
    let earings = document.querySelector('.earings') as HTMLElement;
    if (this.screenWidth >= 1230) {
      rings.addEventListener('mouseover', this.onHover);
      rings.addEventListener('mouseleave', this.onLeave);
      earings.addEventListener('mouseover', this.onHover2);
      earings.addEventListener('mouseleave', this.onLeave);
    }
  }

  onHover() {
    let right = document.querySelector('.landing-page_right') as HTMLDivElement;
    let animate1 = document.querySelector('.animate1') as HTMLElement;
    right.style.width = '70%';
    right.style.gridTemplateRows = '100% 0%';
    animate1.style.display = 'none';
  }

  onHover2() {
    let right = document.querySelector('.landing-page_right') as HTMLDivElement;
    let animate = document.querySelector('.animate') as HTMLElement;
    right.style.width = '70%';
    right.style.gridTemplateRows = '0% 100%';
    animate.style.display = 'none';
  }

  onLeave() {
    setTimeout(() => {
      let animate = document.querySelector('.animate') as HTMLElement;
      let animate1 = document.querySelector('.animate1') as HTMLElement;
      animate.style.display = 'block';
      animate1.style.display = 'block';
    }, 200);
    let right = document.querySelector('.landing-page_right') as HTMLDivElement;
    right.style.gridTemplateRows = '50% 50%';
    if (this.screenWidth <= 1230) {
      right.style.width = '100%';
    } else {
      right.style.width = '50%';
    }
  }
}
