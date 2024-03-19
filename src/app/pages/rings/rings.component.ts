import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SingleProduct } from 'src/app/shared/interfaces/single-product';
import { RingsService } from 'src/app/shared/services/rings.service';

@Component({
  selector: 'app-rings',
  templateUrl: './rings.component.html',
  styleUrls: ['./rings.component.scss'],
})
export class RingsComponent implements OnInit {
  ringsArr: SingleProduct[] = [];
  title: string = '';

  constructor(
    private ringsService: RingsService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.title = this.activatedRoute.snapshot.url[0].path;
    this.ringsArr = this.ringsService.ringsData;
  }
}
