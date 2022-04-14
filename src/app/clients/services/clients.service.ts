import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Client } from 'src/app/core/models/client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  private urlApi: string = environment.urlApi;
  //observable froid
  public collection$: Observable<Client[]>;

  constructor(private httpClient: HttpClient) {
    this.collection$ = this.httpClient.get<Client[]>(this.urlApi + '/clients');
    // ou possible d ecrirer (`${this.urlApi}/orders`)
  }

  public changeState(client: Client, state: StateOrder) {
    const obj = new Client(client);
    obj.state = state;
    return this.update(obj);
  }
  // ``permettent de faire une concatenation
  public update(item: Client): Observable<Client> {
    return this.httpClient.put<Client>(
      `${this.urlApi}/clients/${item.id}`,
      item
    );
  }
}
