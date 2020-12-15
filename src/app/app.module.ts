
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

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [	
    AppComponent,
      LoginComponent
   ],
  imports: [
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
    FieldsetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
