import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { ViewListOrdersComponent } from './views/view-list-orders/view-list-orders.component';
import { ViewAddOrderComponent } from './views/view-add-order/view-add-order.component';
import { ViewEditOrderComponent } from './views/view-edit-order/view-edit-order.component';


@NgModule({
  declarations: [
    ViewListOrdersComponent,
    ViewAddOrderComponent,
    ViewEditOrderComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
