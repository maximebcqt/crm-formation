import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-view-add-client',
  templateUrl: './view-add-client.component.html',
  styleUrls: ['./view-add-client.component.scss']
})
export class ViewAddClientComponent implements OnInit {

  public item: Client = new Client();
  constructor(private clientsService: ClientsService, private router: Router) {}

  ngOnInit(): void {}
  public action(item: Client) {
    this.clientsService.add(item).subscribe();
    this.router.navigate(['clients']);
  }

}
