import { Component, OnInit } from '@angular/core';
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
  public collections!: Order[];
  constructor(private ordersService: OrdersService) {
    this.ordersService.collection$.subscribe((dataRecup) => {
      console.log(dataRecup);
      this.collections = dataRecup;
    });
  }
  public changeTitle() {
    this.myTitle = 'changement du titre ';
  }
  ngOnInit(): void {}
}
