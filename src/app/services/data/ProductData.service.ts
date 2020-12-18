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
    return this.HttpClient.get<Product[]>(`${environment.API_URL}/storehouse/v1/products`);
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
  getProductByNameStud(){
    
    var product1 = new Product(1,"sedia","arredamento","cucina",20,"A-2");
    var product2 = new Product(2,"tavolo","esterno","cucina",30,"IKEA");
    var product3 = new Product(3,"vaso","arredamento","salotto",40,"IKEA");
    this.products = [product1,product2,product3];

    return this.products;
  }
}
