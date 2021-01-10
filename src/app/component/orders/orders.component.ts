import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Order } from '../../domain/Order';
import { OrderDataService } from '../../services/data/OrderData.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  providers: [MessageService]
})
export class OrdersComponent implements OnInit {
  order: Order;
  orders: Order[];
  userDialog: boolean;
  nameUser: string;
  addressUser: string;
  paymentMethodUser: string;
  constructor(
    private messageService: MessageService,
    private orderDataService: OrderDataService
  ) { }

  ngOnInit() {
    this.orderDataService.getOrders().subscribe(data => this.orders = data);
  }

  deleteOrder(order: Order) {
    this.orderDataService.deleteOrder(order).subscribe(
      response => {
        this.messageService.add({ key: 'tc', severity: 'success', summary: 'Service Message', detail: 'Order deleted' });
      },
      err => {
        this.messageService.add({ key: 'tc', severity: 'error', summary: 'Error', detail: 'Error on deleting the order' });
      }
    );
  }

  refresh(): void {
    window.location.reload();
  }

  getTotal(order: Order): string {
    let total: number = 0.00;
    order.elements.forEach(element => {
      total += element.product.price * element.quantity;
    });
    return total.toFixed(2);
  }

  close(order: Order) {
    this.orderDataService.closeOrder(order.id).subscribe(
      response => {
        this.messageService.add({ key: 'tc', severity: 'success', summary: 'Service Message', detail: 'Order closed' });
      },
      err => {
        this.messageService.add({ key: 'tc', severity: 'error', summary: 'Error', detail: 'Error on closing the order' });
      }
    )
  }

 

  openUserDialog(order: Order) {
    this.order = order;
    this.userDialog = true;
  }

  saveUserAndPdf() {
    
    this.orderDataService.downloadPdf(this.order, this.nameUser, this.addressUser, this.paymentMethodUser);
   
  }
}
