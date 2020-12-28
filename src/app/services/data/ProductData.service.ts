import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import{Product}from '../../domain/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token'
    })
  };

constructor(private HttpClient:HttpClient) { }

  getAllProducts(){
    return this.HttpClient.get<Product[]>(`${environment.API_URL}/storehouse/products`);
  }

  save(product: Product) {
    return this.HttpClient.post<Product>(`${environment.API_URL}/storehouse/product/save`, product);
  }

  update(product: Product) {
    return this.HttpClient.post<Product>(`${environment.API_URL}/storehouse/product/update`, product);
  }

  delete(id: number) {
    return this.HttpClient.delete(`${environment.API_URL}/storehouse/product/delete?id=${id}`);
  }
 
}
