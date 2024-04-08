import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SingleProduct } from 'src/app/shared/interfaces/single-product';
import { WatchesService } from 'src/app/shared/services/watches.service';

@Component({
  selector: 'app-watches',
  templateUrl: './watches.component.html',
  styleUrls: ['./watches.component.scss'],
})
export class WatchesComponent {
  watchesArr: SingleProduct[] = [];
  title: string = '';
  isOpenedFilter: boolean = false;

  constructor(
    private watchesService: WatchesService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.title = this.activatedRoute.snapshot.url[0].path;
    this.watchesArr = this.watchesService.watchesData;
  }

  openPop(value: boolean) {
    this.isOpenedFilter = value;
  }

  filterArr(value: any) {
    this.watchesArr = this.watchesService.watchesData;
    let filteredOffers = this.watchesArr.filter((el) => {
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

    this.watchesArr = filteredOffers
  }
}
