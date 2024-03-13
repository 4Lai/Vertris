import { Component, OnInit } from '@angular/core';
import { FooterService } from '../../services/footer.service';
import { FooterSingle } from '../../interfaces/footer-single';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  aboutUs: FooterSingle[] = [];
  offers: FooterSingle[] = [];
  customerService: FooterSingle[] = [];
  contact: FooterSingle[] = [];
  regulations: FooterSingle[] = [];

  constructor(private footerService: FooterService) {}

  ngOnInit(): void {
    this.aboutUs = this.footerService.aboutUs;
    this.offers = this.footerService.offers;
    this.customerService = this.footerService.customerService;
    this.contact = this.footerService.contact;
    this.regulations = this.footerService.regulations;
  }
}
