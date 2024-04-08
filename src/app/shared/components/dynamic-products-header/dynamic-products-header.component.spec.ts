import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicProductsHeaderComponent } from './dynamic-products-header.component';

describe('DynamicProductsHeaderComponent', () => {
  let component: DynamicProductsHeaderComponent;
  let fixture: ComponentFixture<DynamicProductsHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicProductsHeaderComponent]
    });
    fixture = TestBed.createComponent(DynamicProductsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
