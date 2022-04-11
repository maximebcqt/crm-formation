import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewListClientsComponent } from './view-list-clients.component';

describe('ViewListClientsComponent', () => {
  let component: ViewListClientsComponent;
  let fixture: ComponentFixture<ViewListClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewListClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewListClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
