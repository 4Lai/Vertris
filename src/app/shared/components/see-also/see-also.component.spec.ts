import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeAlsoComponent } from './see-also.component';

describe('SeeAlsoComponent', () => {
  let component: SeeAlsoComponent;
  let fixture: ComponentFixture<SeeAlsoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeeAlsoComponent]
    });
    fixture = TestBed.createComponent(SeeAlsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
