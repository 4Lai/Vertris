import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventagesComponent } from './adventages.component';

describe('AdventagesComponent', () => {
  let component: AdventagesComponent;
  let fixture: ComponentFixture<AdventagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdventagesComponent]
    });
    fixture = TestBed.createComponent(AdventagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
