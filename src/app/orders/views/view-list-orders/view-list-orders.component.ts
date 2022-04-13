import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-view-list-orders',
  templateUrl: './view-list-orders.component.html',
  styleUrls: ['./view-list-orders.component.scss'],
})
export class ViewListOrdersComponent implements OnInit {
  public myTitle: string = 'titre list order';

  constructor(private ordersService: OrdersService) {
    this.ordersService.collection$.subscribe((dataRecup) =>
      console.log(dataRecup)
    );
  }

  ngOnInit(): void {}
}
