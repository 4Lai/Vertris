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
  isOpenedFilter: boolean = false;

  constructor(
    private ringsService: RingsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.title = this.activatedRoute.snapshot.url[0].path;
    this.ringsArr = this.ringsService.ringsData;
  }

  openPop(value: boolean) {
    this.isOpenedFilter = value;
  }

  filterArr(value: any) {
    this.ringsArr = this.ringsService.ringsData;
    let filteredOffers = this.ringsArr.filter((el) => {
      let match = [];
      if (value.type) {
        if (el.type === value.type) {
          match.push(true);
        } else {
          match.push(false);
        }
      }
      if (value.bestseller) {
        if (el.bestseller === value.bestseller) {
          match.push(true);
        } else {
          match.push(false);
        }
      }
      if (value.sale) {
        if (el.discount === value.sale) {
          match.push(true);
        } else {
          match.push(false);
        }
      }
      if (value.priceFrom) {
        if (el.price > value.priceFrom) {
          match.push(true);
        } else {
          match.push(false);
        }
      }
      if (value.priceTo) {
        if (el.price < value.priceTo) {
          match.push(true);
        } else {
          match.push(false);
        }
      }

      let isNotMatched = match.some((val) => {
        return val === false;
      });

      return isNotMatched ? null : el;
    });

    this.ringsArr = filteredOffers;
  }
}
