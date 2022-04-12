import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAddClientComponent } from './views/view-add-client/view-add-client.component';
import { ViewEditClientComponent } from './views/view-edit-client/view-edit-client.component';
import { ViewListClientsComponent } from './views/view-list-clients/view-list-clients.component';

const routes: Routes = [
  { path: '', component: ViewListClientsComponent },
  { path: 'add', component: ViewAddClientComponent },
  { path: 'edit', component: ViewEditClientComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsRoutingModule {}
