import { Component, OnInit } from '@angular/core';
import { PaymentMethods } from '../../interfaces/payment-methods';
import { PaymentMethodsService } from '../../services/payment-methods.service';

@Component({
  selector: 'app-payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.scss']
})
export class PaymentMethodsComponent implements OnInit {
  pmD: PaymentMethods[] = []

  constructor(private PaymentMethodsService: PaymentMethodsService) {}

  ngOnInit(): void {
    this.pmD = this.PaymentMethodsService.pmData
  }
}
