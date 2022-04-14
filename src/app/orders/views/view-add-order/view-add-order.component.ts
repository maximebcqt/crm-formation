import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-view-add-order',
  templateUrl: './view-add-order.component.html',
  styleUrls: ['./view-add-order.component.scss'],
})
export class ViewAddOrderComponent implements OnInit {
  public item: Order = new Order();
  constructor() {}

  ngOnInit(): void {}
}
