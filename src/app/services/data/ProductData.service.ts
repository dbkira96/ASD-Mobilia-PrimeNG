import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import{Product}from '../../domain/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      
    })
  };

constructor(private HttpClient:HttpClient) { }

  getAllProducts(){
    return this.HttpClient.get<Product[]>(`${environment.API_URL}/storehouse/products`);
  }

   //return all products by id of subcategory
   getAllSubcategoryByCategory(id):Observable<Product[]>{
    return this.HttpClient.get<Product[]>(`${environment.API_URL}/storehouse/subcategories/${id}`);
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
