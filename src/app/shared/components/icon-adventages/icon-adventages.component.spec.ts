import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconAdventagesComponent } from './icon-adventages.component';

describe('IconAdventagesComponent', () => {
  let component: IconAdventagesComponent;
  let fixture: ComponentFixture<IconAdventagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconAdventagesComponent]
    });
    fixture = TestBed.createComponent(IconAdventagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
