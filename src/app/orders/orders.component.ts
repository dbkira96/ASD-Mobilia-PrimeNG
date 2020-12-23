import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Order } from '../domain/Order';
import { OrderDataService } from '../services/data/OrderData.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  providers:[MessageService]
})
export class OrdersComponent implements OnInit {

  orders: Order[];
  
  constructor(
    private messageService: MessageService,
    private orderDataService: OrderDataService
  ) { }

  ngOnInit() {
    this.orderDataService.getOrders().subscribe(data => this.orders = data);
  }

  deleteOrder(order: Order) {
    this.orderDataService.deleteOrder(order).subscribe(
      response=>{
        this.messageService.add({key: 'tc', severity:'success', summary: 'Service Message', detail: 'Order deleted'});
      },
      err=>{
        this.messageService.add({key: 'tc', severity:'error', summary: 'Error', detail: 'Error on deleting the order'});
      }
    );
  }

  refresh(): void {
    window.location.reload();
  }

}
