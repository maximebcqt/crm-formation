import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAddOrderComponent } from './views/view-add-order/view-add-order.component';
import { ViewEditOrderComponent } from './views/view-edit-order/view-edit-order.component';
import { ViewListOrdersComponent } from './views/view-list-orders/view-list-orders.component';

const routes: Routes = [
  { path: '', component: ViewListOrdersComponent },
  { path: 'add', component: ViewAddOrderComponent },
  { path: 'edit', component: ViewEditOrderComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {}
