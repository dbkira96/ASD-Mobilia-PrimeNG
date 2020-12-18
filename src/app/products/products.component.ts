import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import{Product} from '../domain/Product'
import{ProductDataService}from '../services/data/ProductData.service'



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[]=[];
  constructor(
    private productData:ProductDataService,
  ) { }

  ngOnInit() {
   // this.products=this.productData.getAllProducts();
      this.productData.getAllProducts().subscribe(
        response=>{
          this.products=response
        }
      )
   /*  this.authService.authenticate(this.username, this.password).subscribe(
      response => {
        
        if(response==true) {
          sessionStorage.setItem("user", this.username);
          this.isAuthenticate = true;
          this.route.navigate(['home', this.username]);
      }
      else {
          this.isAuthenticate = false;
          this.messageService.add({key: 'tc', severity:'error', summary: 'Error', detail: 'Bad username or password'});
        }
      }
    ) */
  }

}
