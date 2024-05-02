import { Injectable } from '@angular/core';
import { PaymentMethods } from '../interfaces/payment-methods';

@Injectable({
  providedIn: 'root',
})
export class PaymentMethodsService {
  constructor() {}

  pmData: PaymentMethods[] = [
    {
      title: 'formy płatności',
      data: [
        {
          subtitle: 'Przelewy24',
          description:
            'Przelewy 24 to system płatności online, umożliwiający dokonanie szybkiej płatności za zakupy. Dzięki płatnościom z wykorzystaniem platformy Przelewy 24 możesz bezproblemowo dokonać płatności ze swojego konta bankowego lub kartą płatniczą.',
        },
        {
          subtitle: 'BLIK',
          description:
            'Do płatności BLIKIEM nie potrzebujesz karty płatniczej ani portfela. Wystarczy telefon z dostępem do internetu i aplikacja Twojego banku.',
        },
        {
          subtitle: 'PayPo',
          description:
            'O bezpieczna metoda płatności odroczonej, dzięki której za swoje zamówienie zapłacisz nawet do 30 dni po jego dostarczeniu wprost pod Twoje drzwi.',
        },
        {
          subtitle: 'Karta podarunkowa',
          description:
            'Otrzymałeś naszą kartę podarunkową? Możesz ją wykorzystać na naszej stronie wpisując przy zamówieniu unikalny numer karty, kod i PIN.',
        },
        {
          subtitle: 'Płatność przy odbiorze',
          description:
            'Opłatę można uiścić gotówką lub BLIKiem bezpośrednio u kuriera.',
        },
        {
          subtitle: 'Zakupy na raty',
          description:
            'Zakupy na raty polegają na rozłożeniu wydatku na kilkanaście miesięcznych rat.',
        },
      ],
    },
  ];
}
