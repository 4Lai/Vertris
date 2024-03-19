import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SingleProduct } from 'src/app/shared/interfaces/single-product';
import { EaringsService } from 'src/app/shared/services/earings.service';

@Component({
  selector: 'app-earings',
  templateUrl: './earings.component.html',
  styleUrls: ['./earings.component.scss'],
})
export class EaringsComponent {
  earingsArr: SingleProduct[] = [];
  title: string = '';

  constructor(
    private earingsService: EaringsService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.title = this.activatedRoute.snapshot.url[0].path;
    this.earingsArr = this.earingsService.earingsData
  }
}
