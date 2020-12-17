import { Component, OnInit } from '@angular/core';
import{Product} from '../domain/Product'
import{ProductDataService}from '../services/data/ProductData.service'



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[]=[];
  constructor(
    private productData:ProductDataService,
  ) { }

  ngOnInit() {
    this.products=this.productData.getProductByNameStud();
  }

}
