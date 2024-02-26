import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LandingPageService {
  constructor() {}

  // onHoverRightUp() {
  //   let right = document.querySelector('.landing-page_right') as HTMLDivElement;
  //   let animate1 = document.querySelector('.animate1') as HTMLElement;
  //   right.style.width = '70%';
  //   right.style.gridTemplateRows = '100% 0%';
  //   animate1.style.display = 'none';
  // }

  // onHoverRightDown() {
  //   let right = document.querySelector('.landing-page_right') as HTMLDivElement;
  //   let animate = document.querySelector('.animate') as HTMLElement;
  //   right.style.width = '70%';
  //   right.style.gridTemplateRows = '0% 100%';
  //   animate.style.display = 'none';
  // }

  // onHoverReset() {
  //   setTimeout(() => {
  //     let animate = document.querySelector('.animate') as HTMLElement;
  //     let animate1 = document.querySelector('.animate1') as HTMLElement;
  //     animate.style.display = 'block';
  //     animate1.style.display = 'block';
  //   }, 200);
  //   let right = document.querySelector('.landing-page_right') as HTMLDivElement;
  //   right.style.width = '50%';
  //   right.style.gridTemplateRows = '50% 50%';
  // }
}
