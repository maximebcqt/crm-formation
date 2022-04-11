import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { ViewSignInComponent } from './views/view-sign-in/view-sign-in.component';
import { ViewSignUComponent } from './views/view-sign-u/view-sign-u.component';
import { ViewSignUpComponent } from './views/view-sign-up/view-sign-up.component';
import { ViewResetPasswordComponent } from './views/view-reset-password/view-reset-password.component';
import { ViewForgotPasswordComponent } from './views/view-forgot-password/view-forgot-password.component';


@NgModule({
  declarations: [
    ViewSignInComponent,
    ViewSignUComponent,
    ViewSignUpComponent,
    ViewResetPasswordComponent,
    ViewForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
