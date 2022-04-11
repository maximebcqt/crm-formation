import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAddOrderComponent } from './view-add-order.component';

describe('ViewAddOrderComponent', () => {
  let component: ViewAddOrderComponent;
  let fixture: ComponentFixture<ViewAddOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAddOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAddOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
