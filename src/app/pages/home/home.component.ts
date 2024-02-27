import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SingleProduct } from 'src/app/shared/interfaces/single-product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  recForYou: SingleProduct[] = this.activatedRoute.snapshot.data['recForYou'];
  deals: SingleProduct[] = this.activatedRoute.snapshot.data['deals'];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {}
}
