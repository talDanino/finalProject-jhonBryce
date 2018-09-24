import { Component, OnInit, Input, Output } from '@angular/core';
import { Car } from '../../models/car.model';
import { CarService } from '../../services/car.service';
import { CarAndType } from '../../models/carAndType';

@Component({
  selector: 'app-car-preview',
  templateUrl: './car-preview.component.html',
  styleUrls: ['./car-preview.component.css']
})
export class CarPreviewComponent implements OnInit {

    @Input() car: CarAndType;
    @Input() closeDetailes:Function;
    public calcRent = false;
    public orderCar = false;
    


    constructor(private myCarService: CarService) { }

    ngOnInit() {
    }


    public calculateRentClicked():void {
        this.calcRent = true;
    }
    public OrderClick(): void{
        this.orderCar= true;
      }

  

}
