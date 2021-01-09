import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService, SelectItem } from 'primeng/api';
import { Product } from 'src/app/domain/Product';
import { ProductDataService } from 'src/app/services/data/ProductData.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  product: Product = { subcategory: {} };
  imageSrc:string;
  sortOptions: SelectItem[];
  sortOrder: number;
  sortField: string;
  constructor( private activatedRouted: ActivatedRoute, private productData: ProductDataService
   ) { }

  ngOnInit() {
    this.product = {
      id: 0, name: "", brand: "", price: 0, color: "", size: "", stock: 0, 
      subcategory: { id: 0, name: "", category: { id: 0, name: "" } },
      vendor: { id: 0, name: "", VATNumber: "", email: "", phone: 0 },
      place: { id: 0, shelf: { id: 0 } }
    };
    const id = +this.activatedRouted.snapshot.params.id;
    this.product.subcategory.id=id;
    
    this.productData.getAllSubcategoryByCategory(id).subscribe(
      data => {
        this.products = data;
      }
    );
  }
  
  generateRating() {
    return Math.floor(Math.random() * Math.floor(5)+1);
}
  
  onSortChange(event) {
    const value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    } else {
        this.sortOrder = 1;
        this.sortField = value;
    }
}
}
