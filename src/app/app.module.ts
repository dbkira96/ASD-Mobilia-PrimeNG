
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {ToastModule} from 'primeng/toast';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';
import {FieldsetModule} from 'primeng/fieldset';
import {TabMenuModule} from 'primeng/tabmenu';
import {ToolbarModule} from 'primeng/toolbar';
import {DataViewModule} from 'primeng/dataview';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import {KeyFilterModule} from 'primeng/keyfilter';
import {DialogModule} from 'primeng/dialog';
import {CheckboxModule} from 'primeng/checkbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './component/home/home.component';
import { ProductsComponent } from './component/products/products.component';
import { ProductComponent } from './component/product/product.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import {InputNumberModule} from 'primeng/inputnumber';
import {RadioButtonModule} from 'primeng/radiobutton';
import { OrdersComponent } from './component/orders/orders.component';
import { NewOrderComponent } from './component/newOrder/newOrder.component';
import {CarouselModule} from 'primeng/carousel';
import { CategoryComponent } from './component/category/category.component';
import { StorehouseComponent } from './component/storehouse/storehouse.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { SubcategoryComponent } from './component/subcategory/subcategory.component';
import { ReactiveFormsModule } from '@angular/forms';

import { SlideMenuModule } from 'primeng/slidemenu';
import { UsersComponent } from './component/users/users.component';


@NgModule({
  declarations: [							
    AppComponent,
      LoginComponent,
      HomeComponent,
      ProductsComponent,
      ProductComponent,
      ToolbarComponent,
      RegisterComponent,
      OrdersComponent,
      NewOrderComponent,
    StorehouseComponent,
      CategoryComponent,
      OrdersComponent,
      UsersComponent,
      SubcategoryComponent
   ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    PasswordModule,
    ToastModule,
    TabMenuModule,
    BrowserAnimationsModule,
    TableModule,
    CarouselModule,
    FieldsetModule,
    ToolbarModule,
    DataViewModule,
    DropdownModule,
    CalendarModule,
    KeyFilterModule,
    DialogModule,
    InputNumberModule,
    CheckboxModule,
    RadioButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    SlideMenuModule,
    ButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
