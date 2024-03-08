import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsSingleComponent } from './news-single.component';

describe('NewsSingleComponent', () => {
  let component: NewsSingleComponent;
  let fixture: ComponentFixture<NewsSingleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsSingleComponent]
    });
    fixture = TestBed.createComponent(NewsSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
