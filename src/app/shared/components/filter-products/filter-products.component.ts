import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FilterForm, FilterFormValue } from '../../interfaces/filter-form';
import { AllProductsService } from '../../services/all-products.service';
import { ActivatedRoute } from '@angular/router';
import { SingleProduct } from '../../interfaces/single-product';

@Component({
  selector: 'app-filter-products',
  templateUrl: './filter-products.component.html',
  styleUrls: ['./filter-products.component.scss'],
})
export class FilterProductsComponent implements OnInit {
  @Output() closeVal = new EventEmitter<boolean>();
  @Output() form = new EventEmitter<FilterFormValue>();
  path: string = '';
  allProds: any = [];
  filteredProds: SingleProduct[] = [];

  constructor(
    private allProductsService: AllProductsService,
    private activatedRoute: ActivatedRoute
  ) {}

  filterForm = new FormGroup<FilterForm>({
    priceFrom: new FormControl(''),
    priceTo: new FormControl(''),
    type: new FormControl(''),
    bestseller: new FormControl(false, { nonNullable: true }),
    sale: new FormControl(false, { nonNullable: true }),
  });

  ngOnInit(): void {
    this.allProds = this.allProductsService.allProducts;
    this.path = this.activatedRoute.snapshot.url[0].path;

    if (this.path === 'produkty') {
      let type = this.allProds.map((el: any) => {
        return el.type;
      });
      this.allProds = type;
      this.allProds = this.removeDuplicates(this.allProds);
    } else if (this.path === 'nowości') {
      let newColl = this.allProds.filter((val: any) => {
        return val.newCollection === true;
      });
      this.allProds = newColl;
      let type = this.allProds.map((el: any) => {
        return el.type;
      });
      this.allProds = type;
      this.allProds = this.removeDuplicates(this.allProds);
    } else {
      let fil = this.allProds.filter((val: any) => {
        return val.path === this.path;
      });
      this.allProds = fil;
      let type = this.allProds.map((el: any) => {
        return el.type;
      });
      this.allProds = type;
      this.allProds = this.removeDuplicates(this.allProds);
    }
  }

  removeDuplicates(data: any) {
    return data.reduce(
      (acc: any, curr: any) => (acc.includes(curr) ? acc : [...acc, curr]),
      []
    );
  }

  onClose() {
    this.closeVal.emit(false);
  }

  onSubmit() {
    this.closeVal.emit(false);
    //
    this.form.emit(this.filterForm.value as FilterFormValue);
    this.filterForm.reset();
    let options = document.querySelector(
      '.form_type_select'
    ) as HTMLSelectElement;
    options.selectedIndex = 0;
  }
}
