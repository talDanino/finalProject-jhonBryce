import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Order } from '../models/order.model';
import { OrderAndType } from '../models/orderAndType.model';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

    private link="http://localhost:55715";
    public orders : Order[];
    ordersWithTypes : OrderAndType[];

  constructor(private myHttpClient: HttpClient) { }


  public getOrders(){
      return this.myHttpClient.get(this.link + '/api/order/all')
  }

  public getCarTypes() {
    return this.myHttpClient.get(this.link+ '/api/carType/all')            
}




}
