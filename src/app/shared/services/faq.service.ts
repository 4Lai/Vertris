import { Injectable } from '@angular/core';
import { Faq } from '../interfaces/faq';

@Injectable({
  providedIn: 'root',
})
export class FaqService {
  constructor() {}

  faqData: Faq[] = [
    {
      title: 'najczęściej zadawane pytania',
      data: [
        { question: 'pierwsze pytanie', answer: 'pierwsza odpowiedź' },
        { question: 'drugie pytanie', answer: 'druga odpowiedź' },
        { question: 'trzecie pytanie', answer: 'trzecia odpowiedź' },
        { question: 'czwarte pytanie', answer: 'czwarta odpowiedź' },
        { question: 'piąte pytanie', answer: 'piąta odpowiedź' },
        { question: 'szóste pytanie', answer: 'szósta odpowiedź' },
      ],
    },
  ];
}
