import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { Car } from '../../models/car.model';
import { CarTypes } from '../../models/carTypes.model';
import { CarAndType } from '../../models/carAndType';
import { Branch } from '../../models/branch.model';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
    
    allCars : Car[];
    allTypes : CarTypes[];
    allBranches:Branch[];
    carsWithTypes : CarAndType[];
    selectedCar:CarAndType;

  constructor(private myCarService: CarService) { 
    this.myCarService.getCars().subscribe((ArrayOfCars:Array<Car>) => {
        this.allCars = ArrayOfCars; 
        
        this.myCarService.getCarTypes().subscribe((ArrayOfTypes:Array<CarTypes>) => {
            this.allTypes = ArrayOfTypes; 

                this.combainCarWithType();
            
        });  // call getCarTypes in getCars
    });
  }


  ngOnInit() {
    this.selectedCar = null;
  }

  
  combainCarWithType():void{
    this.carsWithTypes = this.allCars.map( (car) =>{
        let newcar = new CarAndType();
        this.allTypes.map((type) => {
                if(car.CarType === type.CarTypeID )
                {
                    newcar.CarID = car.CarID;
                    newcar.CurrentMileage = car.CurrentMileage;
                    newcar.GoodForRent = car.GoodForRent;
                    newcar.CarNumber = car.CarNumber;
                    newcar.Branch = car.Branch;
                    newcar.CarImage = car.CarImage? car.CarImage:null;
                    newcar.CarTypeId = type.CarTypeID;
                    newcar.SupplierName = type.SupplierName;
                    newcar.CarModel = type.CarModel;
                    newcar.DailyCost = type.DailyCost;
                    newcar.DailyDelayCost = type.DailyDelayCost;
                    newcar.ProductionYear = type.ProductionYear;
                    newcar.Transmission = type.Transmission;
                }
            });
            return newcar;       
        });
        
    }
  
    public closeDetailes() :void{
        this.selectedCar = null;
    }
    public carClicked(newSelectedCar:CarAndType):void {
        this.selectedCar = newSelectedCar;
    }
}
