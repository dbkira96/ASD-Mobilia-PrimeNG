import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import{Product} from '../../domain/Product'
import{Element} from '../../domain/Element'
import{Order} from  '../../domain/Order'
import{ProductDataService}from '../../services/data/ProductData.service'
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-newOrder',
  templateUrl: './newOrder.component.html',
  styleUrls: ['./newOrder.component.css'],
  providers: [ ProductDataService ,MessageService, ConfirmationService]
})
export class NewOrderComponent implements OnInit {
  
  showAddDialog:boolean=false;
  productDialog: boolean;
  multipleAdd:boolean=false;
  
  selectedID:number;
  products: Product[]=[];
  product: Product={};

  order:Order={}
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
   this.order.elements=[];
   this.order.user=JSON.parse(sessionStorage.getItem("user"))
   this.order.state="NOT_TRANSMITTED"
  }
  addToOrder(productToAdd:Product){
    
      var e:Element=this.order.elements.find(p=>p.product===productToAdd);

      if (e==undefined){ 
        var ne:Element={product:productToAdd,quantity:1};
        this.order.elements.push(ne)
      }
      else{
        e.quantity+=1;
      }
    
  }
  removeElement(elementToRemove:Element){
    
    this.order.elements=this.order.elements.filter(obj=>obj!=elementToRemove)
  }

  toggleAddDialog(){
    this.showAddDialog= !this.showAddDialog;
  }
  addProductById(){
    var e:Product=this.products.find(p=>p.id==this.selectedID);

      if (e==undefined){ 
        this.messageService.clear()
        this.messageService.add({ key: 'tc', severity: 'error', summary: 'Error', detail: 'Error: product not present' })
      }
      else{
        this.messageService.clear()
        this.messageService.add({ key: 'tc', severity: 'success', summary: 'Added', detail: 'product successfully added ' })
        this.addToOrder(e) 
        this.showAddDialog=this.multipleAdd
      }
  }
}
