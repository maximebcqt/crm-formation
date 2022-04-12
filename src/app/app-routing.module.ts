import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ViewSignInComponent } from './login/views/view-sign-in/view-sign-in.component';
import { ViewSignUpComponent } from './login/views/view-sign-up/view-sign-up.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: ViewSignInComponent },
  { path: 'sign-up', component: ViewSignUpComponent },
  {
    path: 'orders',
    loadChildren: () =>
      import('./orders/orders.module').then((m) => m.OrdersModule),
  }, // permet que sur le path orders, va charger orders en tache de fond
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
