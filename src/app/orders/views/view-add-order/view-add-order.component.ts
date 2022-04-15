import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-view-add-order',
  templateUrl: './view-add-order.component.html',
  styleUrls: ['./view-add-order.component.scss'],
})
export class ViewAddOrderComponent implements OnInit {
  public item: Order = new Order();
  constructor(private ordersService: OrdersService, private router: Router) {}

  ngOnInit(): void {}
  public action(item: Order) {
    this.ordersService.add(item).subscribe();
    this.router.navigate(['orders']);
  }
}
