import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MadeByComponent } from './made-by.component';

describe('MadeByComponent', () => {
  let component: MadeByComponent;
  let fixture: ComponentFixture<MadeByComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MadeByComponent]
    });
    fixture = TestBed.createComponent(MadeByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
