import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSignInComponent } from './view-sign-in.component';

describe('ViewSignInComponent', () => {
  let component: ViewSignInComponent;
  let fixture: ComponentFixture<ViewSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSignInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
