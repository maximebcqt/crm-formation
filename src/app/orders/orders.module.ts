import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { OrdersRoutingModule } from './orders-routing.module';
import { ViewAddOrderComponent } from './views/view-add-order/view-add-order.component';
import { ViewEditOrderComponent } from './views/view-edit-order/view-edit-order.component';
import { ViewListOrdersComponent } from './views/view-list-orders/view-list-orders.component';

@NgModule({
  declarations: [
    ViewListOrdersComponent,
    ViewAddOrderComponent,
    ViewEditOrderComponent,
  ],
  imports: [CommonModule, OrdersRoutingModule, SharedModule],
})
export class OrdersModule {}
