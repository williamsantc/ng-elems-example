import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomWebComponentComponent } from './custom-web-component.component';

describe('CustomWebComponentComponent', () => {
  let component: CustomWebComponentComponent;
  let fixture: ComponentFixture<CustomWebComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomWebComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomWebComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
