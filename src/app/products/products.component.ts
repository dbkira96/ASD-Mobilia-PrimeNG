import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import{Product} from '../domain/Product'
import{ProductDataService}from '../services/data/ProductData.service'
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {FilterService} from 'primeng/api';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [ ProductDataService ,MessageService, ConfirmationService]
})



export class ProductsComponent implements OnInit {
  productDialog: boolean;
  products: Product[];
  product: Product={};
  submitted:boolean;
  search="";

  constructor(
    private productData:ProductDataService,
    private messageService: MessageService, 
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit() {
   // this.products=this.productData.getAllProducts();
   this.productData.getAllProducts().subscribe(data => this.products = data);
   
   
   
  }
  openNew() {
    this.product = {};
    this.submitted = false;
    this.productDialog = true;
  }
  editProduct(product: Product) {
    this.product = {...product};
    this.productDialog = true;
  }
  deleteProduct(product: Product) {
    this.confirmationService.confirm({
        message: 'Are you sure you want to delete ' + product.name + '?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            /* this.products = this.products.filter(val => val.id !== product.id);
            this.product = {};
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000}); */
            this.product = {};
        }
    });
}
saveProduct() {
  this.submitted = true;

  /* if (this.product.name.trim()) {
      if (this.product.id) {
          this.products[this.findIndexById(this.product.id)] = this.product;                
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
      }
      else {
          this.product.id = this.createId();
          this.product.image = 'product-placeholder.svg';
          this.products.push(this.product);
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});
      }

      this.products = [...this.products];
      this.productDialog = false;
      this.product = {};
  } */
}
findIndexById(id: string): number {
  let index = -1;
  for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].name === id) {
          index = i;
          break;
      }
  }

  return index;
}

hideDialog() {
    this.productDialog = false;
    this.submitted = false;
}


}
