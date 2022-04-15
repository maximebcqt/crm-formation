import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-view-edit-order',
  templateUrl: './view-edit-order.component.html',
  styleUrls: ['./view-edit-order.component.scss'],
})
export class ViewEditOrderComponent implements OnInit {
  public myTitle: string = 'Ma page edit d orders ';
  //public collections!: Observable<Order[]>;
  public collections!: Order;
  public headers: string[] = [
    'Type',
    'Client',
    'nbJours',
    'tjmHT',
    'Total HT',
    'Total TTC',
    'State',
  ];
  public valeurID!: any;
  constructor(
    private ordersService: OrdersService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    //this.collections = this.ordersService.collection$;
    this.valeurID = this.route.snapshot.paramMap.get('id');
    this.ordersService.getOrderByID(this.valeurID).subscribe((dataRecup) => {
      console.log(dataRecup);
      this.collections = dataRecup;
    });
  }
  //*ngIf="collections.id = {{valeurID}}"
  ngOnInit(): void {}

  public editOrder(item: Order) {
    this.ordersService.update(item).subscribe();
    this.router.navigate(['orders']);
  }
}
