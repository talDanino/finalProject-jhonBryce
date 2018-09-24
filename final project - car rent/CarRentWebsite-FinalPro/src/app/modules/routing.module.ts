import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from '../components/home/home.component';
import { RegisterComponent } from '../components/register/register.component';
import { LoginComponent } from '../components/login/login.component';
import { CarsComponent } from '../components/cars/cars.component';
import { CarPriceComponent } from '../components/car-price/car-price.component';
import { CarPreviewComponent } from '../components/car-preview/car-preview.component';
import { CarOrderComponent } from '../components/car-order/car-order.component';
import { OrderListComponent } from '../components/order-list/order-list.component';


const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "cars", component: CarsComponent },
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent },
    { path: "car-price", component: CarPriceComponent },
    { path: "car-preview", component: CarPreviewComponent },
    { path: "car-order", component: CarOrderComponent },
    { path: "order-list", component: OrderListComponent },
    { path: "", redirectTo: "/home", pathMatch: "full" }  //default  home page
];


@NgModule({
  imports: [
        // Import the above routes into this module:
        RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class RoutingModule { }
