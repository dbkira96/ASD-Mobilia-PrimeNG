import { NgModule } from '@angular/core';
import{HomeComponent}from './component/home/home.component';
import{ProductsComponent}from './component/products/products.component'

import { Routes, RouterModule } from '@angular/router';
import { RouteGuardServiceService } from './services/RouteGuard.service';
import { OrdersComponent } from './component/orders/orders.component';
import{NewOrderComponent}from './component/newOrder/newOrder.component'
import { StorehouseComponent } from './component/storehouse/storehouse.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { CategoryComponent } from './component/category/category.component';
import { SubcategoryComponent } from './component/subcategory/subcategory.component';
import { UsersComponent } from './component/users/users.component';
import { ProductComponent } from './component/product/product.component';

const routes: Routes = [
  {path:'', component : LoginComponent},
  {path:'login', component : LoginComponent},
  {path:'home', component : HomeComponent,canActivate:[RouteGuardServiceService]},
  {path:'products', component : ProductsComponent,canActivate:[RouteGuardServiceService]},
  {path:'register', component : RegisterComponent,canActivate:[RouteGuardServiceService]},
  {path:'orders', component : OrdersComponent, canActivate:[RouteGuardServiceService]},
  {path:'newOrder', component : NewOrderComponent, canActivate:[RouteGuardServiceService]},
  {path:'storehouse', component : StorehouseComponent,canActivate:[RouteGuardServiceService]},
  {path:'category', component: CategoryComponent,canActivate:[RouteGuardServiceService]},
  {path:'categories/:id', component: SubcategoryComponent, canActivate:[RouteGuardServiceService]},
  {path:'users', component : UsersComponent,canActivate:[RouteGuardServiceService]},
  {path:'product', component : ProductComponent,canActivate:[RouteGuardServiceService]},
  {path:'product/:id', component : ProductComponent,canActivate:[RouteGuardServiceService]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
