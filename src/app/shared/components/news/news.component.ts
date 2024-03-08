import { Component, OnInit } from '@angular/core';
import { News } from '../../interfaces/news';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  newsArr: News[] = [];
  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsArr = this.newsService.newsArr;
  }

  onLeave() {
    let link = document.querySelector(
      '.news-footer_link_icon'
    ) as HTMLSpanElement;
    link.classList.add('animLeave');
  }
}
