import { Component, OnInit } from '@angular/core';
import { SeeAlsoSingle } from '../../interfaces/see-also-single';
import { SeeAlsoService } from '../../services/see-also.service';

@Component({
  selector: 'app-see-also',
  templateUrl: './see-also.component.html',
  styleUrls: ['./see-also.component.scss'],
})
export class SeeAlsoComponent implements OnInit {
  contentArr: SeeAlsoSingle[] = [];

  constructor(private seeAlsoService: SeeAlsoService) {}

  ngOnInit(): void {
    this.contentArr = this.seeAlsoService.seeAlsoArr;
  }
  
}
