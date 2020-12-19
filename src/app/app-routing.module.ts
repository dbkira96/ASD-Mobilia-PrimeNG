import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import{HomeComponent}from './home/home.component';
import{ProductsComponent}from './products/products.component'
import{RegisterComponent}from './register/register.component'
import { Routes, RouterModule } from '@angular/router';
import { RouteGuardServiceService } from './services/RouteGuard.service';

const routes: Routes = [
  {path:'', component : LoginComponent},
  {path:'login', component : LoginComponent},
  {path:'home', component : HomeComponent,canActivate:[RouteGuardServiceService]},
  {path:'products', component : ProductsComponent,canActivate:[RouteGuardServiceService]},
  {path:'register', component : RegisterComponent,canActivate:[RouteGuardServiceService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
