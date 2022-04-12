import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './login-routing.module';
import { ViewForgotPasswordComponent } from './views/view-forgot-password/view-forgot-password.component';
import { ViewResetPasswordComponent } from './views/view-reset-password/view-reset-password.component';
import { ViewSignInComponent } from './views/view-sign-in/view-sign-in.component';
import { ViewSignUpComponent } from './views/view-sign-up/view-sign-up.component';

@NgModule({
  declarations: [
    ViewSignInComponent,
    ViewSignUpComponent,
    ViewResetPasswordComponent,
    ViewForgotPasswordComponent,
  ],
  imports: [CommonModule, LoginRoutingModule],
})
export class LoginModule {}
