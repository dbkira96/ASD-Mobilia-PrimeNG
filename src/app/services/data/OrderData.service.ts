import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Invoice } from 'src/app/domain/Invoice';
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

  downloadPdf(invoice:Invoice,order:Order){
   
   
    const fileName = "report.pdf";
    this.httpClient.post(`${environment.API_URL}/storehouse/api/document`, invoice, {  responseType: 'blob'})
    .subscribe((blob: Blob) => {
    console.log('report is downloaded');

    if (navigator.msSaveBlob) 
    { 
        // IE 10+
        navigator.msSaveBlob(blob, fileName);
    }
    else 
    {
        let link = document.createElement("a");
        if (link.download !== undefined) 
        {
            let url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", fileName);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
        else
        {
            //html5 download not supported
        }
    }   
});
  }
}
