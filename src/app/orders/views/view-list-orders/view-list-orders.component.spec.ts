import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewListOrdersComponent } from './view-list-orders.component';

describe('ViewListOrdersComponent', () => {
  let component: ViewListOrdersComponent;
  let fixture: ComponentFixture<ViewListOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewListOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewListOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
