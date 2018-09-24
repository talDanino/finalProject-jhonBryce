import { Component, OnInit, Input } from '@angular/core';
import { CarAndType } from '../../models/carAndType';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-car-order',
  templateUrl: './car-order.component.html',
  styleUrls: ['./car-order.component.css']
})
export class CarOrderComponent implements OnInit {

    @Input() car: CarAndType;
    
    public carsCatalog=false;
    public startRent:string= '';
    public endRent:string='';
    public calulatedPrice:number = 0;

    constructor(private myCarService: CarService) { }

    ngOnInit() {
    }
    onDateChange(): void{
        if(this.startRent!='' && this.endRent!=''){
            let sRent = new Date(this.startRent);
            let eRent = new Date(this.endRent);
            let diffDays:number = eRent.getTime() - sRent.getTime();
            //let diffInMs: number = Date.parse(this.endRent) - Date.parse(this.startRent);
            //let diffInDays: number = diffInMs / 1000 / 60 / 60 / 24;
            //this.calulatedPrice = diffInDays * this.car.DailyCost;
            this.calulatedPrice = diffDays;
        }
    }
    public backToCatalog(): void{
        this.carsCatalog=true;
        
        }
    public OrderClick(): void{
       // const startDate = this.ClientDateToServerDate(this.startRent);
      //  const endDate = this.ClientDateToServerDate(this.endRent);
        this.myCarService.OrderCar( this.startRent , this.endRent ,5 ,this.car.CarID) 
    }
    // ClientDateToServerDate(date :string): string{ // convert date to server format
    //     let newDate;
    //     const dateArray = date.split('-');
    //     newDate = dateArray[2] + '/' + dateArray[1] + '/' + dateArray[0] + ' 00:00:00'
    //     return newDate;
    //  } 
}
