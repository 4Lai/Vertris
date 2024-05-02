import { Injectable } from '@angular/core';
import { DeliveryReturns } from '../interfaces/delivery-returns';

@Injectable({
  providedIn: 'root',
})
export class DeliveryReturnsService {
  constructor() {}

  deliveryReturnsData: DeliveryReturns[] = [
    {
      title: 'dostawy',
      data: [
        {
          method:
            'kupując na naszym portalu możesz skorzystać z bezpłatnej dostawy dla zamówień od 150 PLN na terenie Polski za pośrednictwem kuriera GLS.',
        },
        {
          method:
            'dla zamówień o wartości poniżej 150 PLN koszt dostawy wynosi 20 PLN zarówno dla kuriera GLS i jest doliczany do zamówienia.',
        },
        {
          method: 'dostawa kurierska realizowana jest tylko w dni robocze.',
        },
      ],
    },
    {
      title: 'zwroty',
      data: [
        { method: 'darmowy zwrot biżuterii' },
        { method: 'spersonalizowanej biżuterii nie można zwrócić' },
        { method: 'zwracany towar nie może posiadać śladów użytkowania' },
      ],
    },
  ];

  additionalData: string =
    'W ciągu maksymalnie 21 dni od dostarczenia zwrotu do siedziby naszego sklepu internetowego, otrzymasz zwrot środków na konto, z którego została dokonana płatność za zamówienie lub na numer konta wskazany w formularzu zwrotu.';
}
