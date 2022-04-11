import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ViewListClientsComponent } from './views/view-list-clients/view-list-clients.component';
import { ViewAddClientComponent } from './views/view-add-client/view-add-client.component';
import { ViewEditClientComponent } from './views/view-edit-client/view-edit-client.component';


@NgModule({
  declarations: [
    ViewListClientsComponent,
    ViewAddClientComponent,
    ViewEditClientComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule
  ]
})
export class ClientsModule { }
