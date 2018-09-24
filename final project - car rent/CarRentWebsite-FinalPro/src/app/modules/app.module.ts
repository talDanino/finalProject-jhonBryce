
//----------------------- modules ---------------------
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from '@angular/router';
import { RoutingModule } from './routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";

import { MatIconModule, MatInputModule, MatButtonModule, MatCheckboxModule } from "@angular/material";

//----------------------- components ---------------------
import { AppComponent } from '../components/app.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { MenuComponent } from '../components/menu/menu.component';
import { MainComponent } from '../components/main/main.component';
import { HomeComponent } from '../components/home/home.component';
import { RegisterComponent } from '../components/register/register.component';
import { CarsComponent } from '../components/cars/cars.component';
import { CarPreviewComponent } from '../components/car-preview/car-preview.component';
import { LoginComponent } from '../components/login/login.component';
import { CarPriceComponent } from '../components/car-price/car-price.component';
import { CarOrderComponent } from '../components/car-order/car-order.component';
import { OrderListComponent } from '../components/order-list/order-list.component';

//----------------------- services ---------------------
import { CarService } from '../services/car.service';
import {enableProdMode} from '@angular/core';
import { OrderService } from '../services/order.service';
import { UsersService } from '../services/users.service';
import { OrderPreviewComponent } from '../components/order-preview/order-preview.component';


enableProdMode();


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    MainComponent,
    HomeComponent,
    RegisterComponent,
    CarsComponent,
    CarPreviewComponent,
    LoginComponent,
    CarPriceComponent,
    CarOrderComponent,
    OrderListComponent,
    OrderPreviewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RoutingModule,
    RouterModule,
    HttpClientModule,

    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule
  ],
  providers: [
      CarService,
      OrderService,
      UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
