import { Component, OnInit } from '@angular/core';
import { Adventages } from '../../interfaces/adventages';
import { AdventagesService } from '../../services/adventages.service';

@Component({
  selector: 'app-adventages',
  templateUrl: './adventages.component.html',
  styleUrls: ['./adventages.component.scss'],
})
export class AdventagesComponent implements OnInit {
  adventagesArr: Adventages[] = [];

  constructor(private adventagesService: AdventagesService) {}

  ngOnInit(): void {
    this.adventagesArr = this.adventagesService.adventagesArr;
  }
}
