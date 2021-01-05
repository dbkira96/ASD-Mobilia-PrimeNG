import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import{Product} from '../../domain/Product'
import{Element} from '../../domain/Element'
import{Order} from  '../../domain/Order'
import{ProductDataService}from '../../services/data/ProductData.service'
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { OrderDataService } from 'src/app/services/data/OrderData.service';
import { ConditionalExpr } from '@angular/compiler';
import { Router } from '@angular/router';



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
  
  showPaymentDialog:boolean=false

  selectedID:number;
  products: Product[]=[];
  product: Product={};

  order:Order={}
  element:Element={}
  orderCompleted=false

  selectedPayment:string="CASH"
  total:number=0.00

  //cash payments parameters
  cash:number=0.00
  change:number=0.00

  subcategories: string[]=[]; // non subcategories: string[]
  selectedSub:string;
  submitted:boolean;
  search="";
  constructor(
    private route:Router,
    private productData:ProductDataService,
    private messageService: MessageService, 
    private confirmationService: ConfirmationService,
    private orderService:OrderDataService
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
        e.quantity<productToAdd.stock? e.quantity+=1:this.messageService.add({ key: 'tc', severity: 'error', summary: 'Error', detail: 'cannot add more than avaible stock' });
      }
      this.updateTotal()
    
  }
  removeElement(elementToRemove:Element){
    
    this.order.elements=this.order.elements.filter(obj=>obj!=elementToRemove)
    this.updateTotal();
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

  placeOrder(){
    if(this.checksBeforeOrder()){
      this.orderService.placeOrder(this.order).subscribe(
        o=>{ this.order=o;
          this.togglePaymentDialog()
          console.log(this.order)
      });
    }
  }
  checksBeforeOrder(){
    if(this.order.elements.length==0){
      this.messageService.add({ key: 'tc', severity: 'error', summary: 'Error', detail: 'the items list is empty select a product' })
      return false
    }
    return true
  }


  togglePaymentDialog(){
    this.showPaymentDialog= !this.showPaymentDialog;
  }
  confirmPayment(){
    
        this.orderService.confirmOrder(this.order.id).subscribe(response=>{
        this.orderCompleted=true;
        this.messageService.add({ key: 'tc', severity: 'success', summary: 'Added', detail: 'product successfully added ' })
        this.togglePaymentDialog()
      },
      err=>{
        this.messageService.add({ key: 'tc', severity: 'error', summary: 'Error', detail: 'there was an error placing your order' })
      })
    
  }
  updateTotal(){
    var t:number=0.00;
    this.order.elements.forEach(element => {
      t+=element.product.price*element.quantity
    });
    this.total=t;
  }
  redirect(target:string){
    this.route.navigate([target])
  }
  newOrder(){
    window.location.reload
  }
  
  
}
