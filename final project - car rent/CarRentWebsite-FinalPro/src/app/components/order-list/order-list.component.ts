import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/order.model';
import { OrderService } from '../../services/order.service';
import { OrderAndType } from '../../models/orderAndType.model';
import { CarTypes } from '../../models/carTypes.model';
import { Car } from '../../models/car.model';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

    public allOrders : Order[];
    public allTypes : CarTypes[];
    public allCars : Car[];
    public ordersWithTypes : OrderAndType[];
    public selectedOrder : OrderAndType;

  constructor( private myOrderService: OrderService,
                private myCarService:CarService ) { 

      this.myOrderService.getOrders().subscribe((ArrayOfOrders:Array<Order>)=>{
          this.allOrders=ArrayOfOrders;  
          this.myCarService.getCars().subscribe((ArrayOfCars:Array<Car>)=>{
                this.allCars=ArrayOfCars;
                this.myCarService.getCarTypes().subscribe((ArrayOfTypes:Array<CarTypes>)=>{
                    this.allTypes=ArrayOfTypes;

                    this.combainOrderWithType();
                });
            });
        }); 
    }

  ngOnInit() {
      this.selectedOrder = null;
  }


  combainOrderWithType() : void{
    this.ordersWithTypes = this.allOrders.map( (order) => {
        let newOrder = new OrderAndType();
        this.allCars.map( (car) =>{
            this.allTypes.map( (type) => {
                if(car.CarID === order.CarNumber && car.CarType === type.CarTypeID){
                    newOrder.StartDate = order.StartDate;
                    newOrder.EndDate = order.EndDate;
                    newOrder.ActualReturnDate = order.ActualReturnDate? order.ActualReturnDate:null;
                    newOrder.SupplierName = type.SupplierName;
                    newOrder.CarModel = type.CarModel;
                }
            });
        })
        
        return newOrder;
    })
    console.log(this.ordersWithTypes);

  }


    public closeDetailes() :void{
        this.selectedOrder = null;
    }

    public orderClicked(newSelecctedOrder:OrderAndType):void{
        this.selectedOrder = newSelecctedOrder;
    }

}
