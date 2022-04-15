import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  public myTitle: string = 'Ma liste d orders ';
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

  constructor(private ordersService: OrdersService, private router: Router) {
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

  public editer(id: number) {
    this.router.navigate([`orders/edit/${id}`]);
  }

  public delete(order: Order) {
    console.log('avant dele');
    this.ordersService.delete(order.id).subscribe(
      () =>
        // unsubscribe puis re sub pour maj car c est un observable froid ici
        (this.collections = this.ordersService.collection$)
    );
    console.log('apres dele');
  }
  public action(item: Order) {
    this.ordersService.add(item).subscribe();
    this.router.navigate(['orders']);
  }
}
