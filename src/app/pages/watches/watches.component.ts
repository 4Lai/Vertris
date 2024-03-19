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

  constructor(
    private watchesService: WatchesService,
    private activatedRoute: ActivatedRoute
  ) {}
  
  ngOnInit(): void {
    this.title = this.activatedRoute.snapshot.url[0].path;
    this.watchesArr = this.watchesService.watchesData;
  }
}
