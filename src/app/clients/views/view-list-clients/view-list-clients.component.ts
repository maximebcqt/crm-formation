import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateClient } from 'src/app/core/enums/state-client';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-view-list-clients',
  templateUrl: './view-list-clients.component.html',
  styleUrls: ['./view-list-clients.component.scss'],
})
export class ViewListClientsComponent implements OnInit {
  public myTitle: string = 'Ma liste de clients';
  public headers: string[] = [
    'Nom client',
    'Total CA HT',
    'Commentaire',
    'State',
  ];
  public clients!: Observable<Client[]>;
  public states: string[] = Object.values(StateClient);

  constructor(private ClientsService: ClientsService) {
    this.clients = this.ClientsService.collection$;
  }
  public changeTitle() {
    this.myTitle = 'changement du titre ';
  }

  public changeState(collection: Client, event: any) {
    const state = event.target.value;
    this.ClientsService.changeState(collection, state).subscribe((data) =>
      Object.assign(collection, data)
    );
    // en gros on subscribe car on a observable, et object.assign permet de copier la data recup dans collection
  }

  ngOnInit(): void {}
}
