import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import{Product}from '../../domain/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

constructor(private HttpClient:HttpClient) { }

  getAllProducts(){
    /* return this.HttpClient.get<any>(`${environment.API_URL}/storehouse/products`)
        .toPromise()
        .then(res => <Product[]>res.data)
        .then(data => { return data; }); */
    return this.HttpClient.get<Product[]>(`${environment.API_URL}/storehouse/products`);
  }

  getProductById(id:string){
    return this.HttpClient.get<Product[]>("");
  }
  getProductByCategory(category:string){
    return this.HttpClient.get<Product[]>("");
  }
  getProductBySubcategory(subcategory:string){
    return this.HttpClient.get<Product[]>("");
  }
  getProductByName(name:string){
    return this.HttpClient.get<Product[]>("");
  }
  products: Product[] =[];
 
}
