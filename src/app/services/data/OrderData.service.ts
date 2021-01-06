import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from 'src/app/domain/Order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderDataService {

  constructor(
    private httpClient:HttpClient
  ) { }

  getOrders() {
    return this.httpClient.get<Order[]>(`${environment.API_URL}/storehouse/commands`);
  }

  deleteOrder(order: Order) {
    return this.httpClient.delete(`${environment.API_URL}/storehouse/command/delete?commandId=${order.id}`);
  }

  placeOrder(order:Order){
    return this.httpClient.post<Order>(`${environment.API_URL}/storehouse/command/placeOrder`,order)
  }
  confirmOrder(orderId:string){
    return this.httpClient.get<Order>(`${environment.API_URL}/storehouse/command/confirmPayment?commandId=${orderId}`)
  }

  closeOrder(orderId: string) {
    return this.httpClient.get<Order>(`${environment.API_URL}/storehouse/command/close?commandId=${orderId}`);
  }
}
