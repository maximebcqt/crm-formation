import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEditOrderComponent } from './view-edit-order.component';

describe('ViewEditOrderComponent', () => {
  let component: ViewEditOrderComponent;
  let fixture: ComponentFixture<ViewEditOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEditOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEditOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
