import { Component, OnInit } from '@angular/core';
import { DeliveryReturns } from '../../interfaces/delivery-returns';
import { DeliveryReturnsService } from '../../services/delivery-returns.service';

@Component({
  selector: 'app-delivery-returns',
  templateUrl: './delivery-returns.component.html',
  styleUrls: ['./delivery-returns.component.scss'],
})
export class DeliveryReturnsComponent implements OnInit {
  deliveryReturnsData: DeliveryReturns[] = [];
  additionalReturns: string = ''

  constructor(private deliveryReturnsService: DeliveryReturnsService) {}

  ngOnInit(): void {
    this.deliveryReturnsData = this.deliveryReturnsService.deliveryReturnsData;
    this.additionalReturns = this.deliveryReturnsService.additionalData
  }
}
