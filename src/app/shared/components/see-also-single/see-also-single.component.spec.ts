import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeAlsoSingleComponent } from './see-also-single.component';

describe('SeeAlsoSingleComponent', () => {
  let component: SeeAlsoSingleComponent;
  let fixture: ComponentFixture<SeeAlsoSingleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeeAlsoSingleComponent]
    });
    fixture = TestBed.createComponent(SeeAlsoSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
