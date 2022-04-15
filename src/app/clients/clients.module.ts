import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ClientsRoutingModule } from './clients-routing.module';
import { ViewAddClientComponent } from './views/view-add-client/view-add-client.component';
import { ViewEditClientComponent } from './views/view-edit-client/view-edit-client.component';
import { ViewListClientsComponent } from './views/view-list-clients/view-list-clients.component';
import { FormClientComponent } from './components/form-client/form-client.component';

@NgModule({
  declarations: [
    ViewListClientsComponent,
    ViewAddClientComponent,
    ViewEditClientComponent,
    FormClientComponent,
  ],
  imports: [CommonModule, ClientsRoutingModule, SharedModule],
  exports: [
    FormClientComponent
  ],
})
export class ClientsModule {}
