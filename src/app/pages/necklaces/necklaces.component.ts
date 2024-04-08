import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SingleProduct } from 'src/app/shared/interfaces/single-product';
import { NecklaceService } from 'src/app/shared/services/necklace.service';

@Component({
  selector: 'app-necklaces',
  templateUrl: './necklaces.component.html',
  styleUrls: ['./necklaces.component.scss'],
})
export class NecklacesComponent {
  neckArr: SingleProduct[] = [];
  title: string = '';
  isOpenedFilter: boolean = false;

  constructor(
    private necklacesService: NecklaceService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.title = this.activatedRoute.snapshot.url[0].path;
    this.neckArr = this.necklacesService.neckData;
  }

  openPop(value: boolean) {
    this.isOpenedFilter = value;
  }

  filterArr(value: any) {
    this.neckArr = this.necklacesService.neckData;
    let filteredOffers = this.neckArr.filter((el) => {
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

    this.neckArr = filteredOffers;
  }
}
