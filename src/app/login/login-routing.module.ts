import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewForgotPasswordComponent } from './views/view-forgot-password/view-forgot-password.component';
import { ViewResetPasswordComponent } from './views/view-reset-password/view-reset-password.component';
import { ViewSignInComponent } from './views/view-sign-in/view-sign-in.component';
import { ViewSignUpComponent } from './views/view-sign-up/view-sign-up.component';

const routes: Routes = [
  { path: 'sign-in', component: ViewSignInComponent },
  { path: 'sign-up', component: ViewSignUpComponent },
  { path: 'forgot', component: ViewForgotPasswordComponent },
  { path: 'reset', component: ViewResetPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
