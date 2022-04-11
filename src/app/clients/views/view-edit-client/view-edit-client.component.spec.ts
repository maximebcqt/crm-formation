import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEditClientComponent } from './view-edit-client.component';

describe('ViewEditClientComponent', () => {
  let component: ViewEditClientComponent;
  let fixture: ComponentFixture<ViewEditClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEditClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEditClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
