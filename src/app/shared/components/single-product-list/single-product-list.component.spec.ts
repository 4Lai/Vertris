import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProductListComponent } from './single-product-list.component';

describe('SingleProductListComponent', () => {
  let component: SingleProductListComponent;
  let fixture: ComponentFixture<SingleProductListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleProductListComponent]
    });
    fixture = TestBed.createComponent(SingleProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
