import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewSignInComponent } from './login/views/view-sign-in/view-sign-in.component';
import { ViewSignUpComponent } from './login/views/view-sign-up/view-sign-up.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: ViewSignInComponent },
  { path: 'sign-up', component: ViewSignUpComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
