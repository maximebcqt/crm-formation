import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewResetPasswordComponent } from './view-reset-password.component';

describe('ViewResetPasswordComponent', () => {
  let component: ViewResetPasswordComponent;
  let fixture: ComponentFixture<ViewResetPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewResetPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
