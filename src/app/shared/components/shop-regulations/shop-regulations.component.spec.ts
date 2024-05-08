import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopRegulationsComponent } from './shop-regulations.component';

describe('ShopRegulationsComponent', () => {
  let component: ShopRegulationsComponent;
  let fixture: ComponentFixture<ShopRegulationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopRegulationsComponent]
    });
    fixture = TestBed.createComponent(ShopRegulationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
