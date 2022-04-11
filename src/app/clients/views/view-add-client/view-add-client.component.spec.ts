import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAddClientComponent } from './view-add-client.component';

describe('ViewAddClientComponent', () => {
  let component: ViewAddClientComponent;
  let fixture: ComponentFixture<ViewAddClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAddClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAddClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
