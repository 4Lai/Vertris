import { Component, OnInit } from '@angular/core';
import { ReturnRegulationsService } from '../../services/return-regulations.service';

@Component({
  selector: 'app-return-regulations',
  templateUrl: './return-regulations.component.html',
  styleUrls: ['./return-regulations.component.scss'],
})
export class ReturnRegulationsComponent implements OnInit {
  regData = this.returnRegulationsService.returnRegulationsData.asReadonly()

  constructor(private returnRegulationsService: ReturnRegulationsService) {}

  ngOnInit(): void {
    this.returnRegulationsService.getReturnRegulationsData()
  }
}
