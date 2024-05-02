import { Component, OnInit } from '@angular/core';
import { Faq } from '../../interfaces/faq';
import { FaqService } from '../../services/faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements OnInit {
  faqArr: Faq[] = [];

  constructor(private faqService: FaqService) {}

  ngOnInit(): void {
    this.faqArr = this.faqService.faqData;
  }

  toggle(i: number) {
    let faq = document.querySelectorAll('.faq-list-item_a')[i] as HTMLParagraphElement
    let item = document.querySelectorAll('.faq-list-item')[i] as HTMLDivElement;
    let icon = document.querySelectorAll('.iconn')[i] as HTMLSpanElement
    let question = document.querySelectorAll('.faq-list-item_q')[i] as HTMLHeadingElement;
    if (faq.classList.contains('hidden')) {
      faq.classList.remove('hidden');
      item.style.borderTop = '1px solid red'
      question.style.color = 'red'
      icon.style.transform = 'rotate(180deg)'
    } else {
      faq.classList.add('hidden');
      item.style.borderTop = '1px solid black';
      question.style.color = '#000';
      icon.style.transform = 'rotate(0deg)';
    }
  }
}
