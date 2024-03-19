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

  constructor(
    private necklacesService: NecklaceService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.title = this.activatedRoute.snapshot.url[0].path;
    this.neckArr = this.necklacesService.neckData;
  }
}
