import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/Product'
import { ProductDataService } from '../../services/data/ProductData.service'
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { CategoryService } from 'src/app/services/category.service';
import { VendorService } from 'src/app/services/vendor.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [ProductDataService, MessageService, ConfirmationService]
})
export class ProductsComponent implements OnInit {
  productDialog: boolean;
  products: Product[] = [];
  product: Product = { subcategory: {} };
  selectedSub: string;
  submitted: boolean;
  search = "";

  subcategories: string[] = [];
  vendors: string[] = [];

  select_subcategory: string = "";
  select_vendor: string = "";

  update: boolean;

  constructor(
    private productData: ProductDataService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private categoryService: CategoryService,
    private vendorService: VendorService
  ) { }

  ngOnInit() {
    this.product = {
      id: 0, name: "", brand: "", price: 0, color: "", size: "", stock: 0,
      subcategory: { id: 0, name: "", category: { id: 0, name: "" } },
      vendor: { id: 0, name: "", VATNumber: "", email: "", phone: 0 },
      place: { id: 0, shelf: { id: 0 } }
    };

    this.productData.getAllProducts().subscribe(
      data => {
        this.products = data;
      }
    );

    this.categoryService.getSubcategoriesName().subscribe(
      data => {
        this.subcategories = data;
      }
    );

    this.vendorService.getVendorsName().subscribe(
      data => {
        this.vendors = data;
      }
    )

  }

  openNew() {
    this.product = {
      id: 0, name: "", brand: "", price: 0, color: "", size: "", stock: 0,
      subcategory: { id: 0, name: "", category: { id: 0, name: "" } },
      vendor: { id: 0, name: "", VATNumber: "", email: "", phone: 0 },
      place: { id: 0, shelf: { id: 0 } }
    };
    this.productDialog = true;
    this.update = false;
  }

  editProduct(product: Product) {
    this.product = { ...product };
    this.productDialog = true;
    this.update = true;
  }

  saveProduct() {
    this.product.subcategory.name = this.select_subcategory;
    this.product.vendor.name = this.select_vendor;
    if (this.update) {
      this.productData.update(this.product).subscribe(
        response => {
          this.messageService.add({ key: 'tc', severity: 'success', summary: 'Service Message', detail: 'product updated' });
        },
        err => {
          this.messageService.add({ key: 'tc', severity: 'error', summary: 'Error', detail: 'Error updating the product' });
        }
      );
    }
    else {
      this.productData.save(this.product).subscribe(
        response => {
          this.messageService.add({ key: 'tc', severity: 'success', summary: 'Service Message', detail: 'product saved' });
        },
        err => {
          this.messageService.add({ key: 'tc', severity: 'error', summary: 'Error', detail: 'Error saving the product' });
        }
      );
    }
    this.productDialog = false;
  }

  deleteProduct(product: Product) {
    this.productData.delete(product.id).subscribe(
      response => {
        this.messageService.add({ key: 'tc', severity: 'success', summary: 'Service Message', detail: 'product deleted' });
      },
      err => {
        this.messageService.add({ key: 'tc', severity: 'error', summary: 'Error', detail: 'Error deleting the product' });
      }
    )
  }

  hideDialog() {
    this.productDialog = false;
  }

  refresh(): void {
    window.location.reload();
  }

  //  ???
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

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }


}
