import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private urlApi: string = environment.urlApi;
  //observable froid
  public collection$: Observable<Order[]>;

  constructor(private httpClient: HttpClient) {
    this.collection$ = this.httpClient.get<Order[]>(this.urlApi + '/orders');
    // ou possible d ecrirer (`${this.urlApi}/orders`)
  }

  public changeState(order: Order, state: StateOrder) {
    const obj = new Order(order);
    obj.state = state;
    return this.update(obj);
  }
  // ``permettent de faire une concatenation
  public update(item: Order): Observable<Order> {
    return this.httpClient.put<Order>(`${this.urlApi}/orders/${item.id}`, item);
  }
}
