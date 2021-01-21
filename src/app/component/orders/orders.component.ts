import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Invoice } from 'src/app/domain/Invoice';
import { Order } from '../../domain/Order';
import { OrderDataService } from '../../services/data/OrderData.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  providers: [MessageService]
})
export class OrdersComponent implements OnInit {
  invoice: Invoice;
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
    this.invoice =  {id: 0,
    order_id: 0,
    typeDocument: "",
    documentNumber: 0,
    documentDate: new Date(),
    transmissionAddress: "",
    causal: "",
    userName: "",
    userCF: "",
    userAddress: "",
    userCap: 0,
    userCity: "",
    userProvince: "",
    vatCollectability: "",
    additionalCosts: "",
    totalTaxable: 0.0,
    totalTaxes: 0.0,
    stampData: "",
    discount: 0.0,
    totalDocument: 0,
    methodPayment: "",
    statusPayment: "",
    iban: "",
    bankName: "",
    expirationDate: new Date(),
    netToPay: 0.0
  }
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

 

  openUserDialog(order:Order) {
   this.order = order;
   
    
    this.userDialog = true;
  }

  saveUserAndPdf() {
    var x = this.order.id;
    var y: number = +x;
    this.invoice.order_id=y;
    this.invoice.statusPayment="COMPLETED";
    this.invoice.methodPayment="CASH";
    this.orderDataService.downloadPdf(this.invoice,this.order);
   
  }
  hideDialog() {
    this.userDialog = false;
  }
}
