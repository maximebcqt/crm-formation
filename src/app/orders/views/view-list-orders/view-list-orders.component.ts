import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-view-list-orders',
  templateUrl: './view-list-orders.component.html',
  styleUrls: ['./view-list-orders.component.scss'],
})
export class ViewListOrdersComponent implements OnInit {
  public myTitle: string = 'titre list order';
  public headers: string[] = [
    'Type',
    'Client',
    'nbJours',
    'tjmHT',
    'Total HT',
    'Total TTC',
    'State',
  ];
  public collections!: Observable<Order[]>;
  public states: string[] = Object.values(StateOrder);

  constructor(private ordersService: OrdersService) {
    this.collections = this.ordersService.collection$;
  }
  public changeTitle() {
    this.myTitle = 'changement du titre ';
  }

  public changeState(collection: Order, event: any) {
    const state = event.target.value;
    this.ordersService
      .changeState(collection, state)
      .subscribe((data) => Object.assign(collection, data));
    // en gros on subscribe car on a observable, et object.assign permet de copier la data recup dans collection
  }

  ngOnInit(): void {}
}
