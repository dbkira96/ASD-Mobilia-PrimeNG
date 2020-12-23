import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import{Product} from '../domain/Product'
import{Element} from '../domain/Element'
import{ProductDataService}from '../services/data/ProductData.service'
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-newOrder',
  templateUrl: './newOrder.component.html',
  styleUrls: ['./newOrder.component.css']
})
export class NewOrderComponent implements OnInit {
  
  productDialog: boolean;
  products: Product[]=[];
  product: Product={};

  elements:Element[]=[];
  element:Element={}

  subcategories: string[]=[]; // non subcategories: string[]
  selectedSub:string;
  submitted:boolean;
  search="";
  constructor(
    private productData:ProductDataService,
    private messageService: MessageService, 
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit() {
    this.productData.getAllProducts().subscribe(
      data => {​​
      this.products = data;
    }​​

   );
  }
  addToOrder(productToAdd:Product){
    var e:Element={product:productToAdd,quantity:1}
    this.elements.push(e);
  }
  removeElement(elementToRemove:Element){
    
    this.elements=this.elements.filter(obj=>obj!=elementToRemove)
  }
}
