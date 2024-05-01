import { Component, HostListener, Input, OnInit } from '@angular/core';
import { FooterSingle } from '../../interfaces/footer-single';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer-single-section',
  templateUrl: './footer-single-section.component.html',
  styleUrls: ['./footer-single-section.component.scss'],
})
export class FooterSingleSectionComponent implements OnInit {
  @Input() array: FooterSingle[] = [];
  ex: boolean = false;
  windowWidth: number = 0;
  shouldBeExpanded: boolean = false;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.windowWidth = window.innerWidth;
    if (this.windowWidth <= 900) {
      this.shouldBeExpanded = true;
    }
    if (this.windowWidth > 900) {
      this.shouldBeExpanded = false;
    }
  }

  constructor(private router:Router) {}

  ngOnInit(): void {
    this.windowWidth = window.innerWidth;
    if (this.windowWidth <= 900) {
      this.shouldBeExpanded = true;
    }
    if (this.windowWidth > 900) {
      this.shouldBeExpanded = false;
    }
  }

  expand() {
    this.ex = !this.ex;
  }

  click(path: string, path2: string) {
    this.router.navigate([`${path}`], {fragment: `${path2}`})
  }
}
