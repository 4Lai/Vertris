import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SingleProduct } from 'src/app/shared/interfaces/single-product';
import { AccessoriesService } from 'src/app/shared/services/accessories.service';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.scss'],
})
export class AccessoriesComponent {
  accArr: SingleProduct[] = [];
  title: string = '';

  constructor(
    private accessoriesService: AccessoriesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.title = this.activatedRoute.snapshot.url[0].path;
    this.accArr = this.accessoriesService.accData;
  }
}
