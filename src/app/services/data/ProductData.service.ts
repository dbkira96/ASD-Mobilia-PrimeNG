import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Product}from '../../domain/Product'

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

constructor(private HttpClient:HttpClient) { }

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
    
    var product1 = new Product("1","sedia","arredamento","cucina","A-2",20);
    var product2 = new Product("2","tavolo","esterno","cucina","B-4",30);
    var product3 = new Product("3","vaso","arredamento","salotto","C-8",40);
    this.products = [product1,product2,product3];

    return this.products;
  }
}
