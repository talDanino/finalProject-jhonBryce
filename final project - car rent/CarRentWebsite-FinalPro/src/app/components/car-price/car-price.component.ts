import { Component, OnInit, Input } from '@angular/core';
import { CarAndType } from 'src/app/models/carAndType';

@Component({
  selector: 'app-car-price',
  templateUrl: './car-price.component.html',
  styleUrls: ['./car-price.component.css']
})
export class CarPriceComponent implements OnInit {

    @Input() car: CarAndType;
    @Input() closeDetailes:Function;

    public carsCatalog = false;
    public orderCar = false;
    public startRent:string= '';
    public endRent:string='';
    public calulatedPrice:number = 0;

  constructor() { }
  
  ngOnInit() {
  }
    onDateChange(): void{
        if(this.startRent!='' && this.endRent!=''){
            let diffInMs: number = Date.parse(this.endRent) - Date.parse(this.startRent);
            let diffInDays: number = diffInMs / 1000 / 60 / 60 / 24;
            this.calulatedPrice = diffInDays * this.car.DailyCost;
        }
    }

  public backToCatalog(): void{
      this.carsCatalog=true; 
  }

  public OrderClick(): void{
    this.orderCar= true;
  }

}
