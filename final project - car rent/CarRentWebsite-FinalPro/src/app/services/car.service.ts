import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CarAndType } from '../models/carAndType';


@Injectable({
  providedIn: 'root'
})
export class CarService {

    private link="http://localhost:55715";
    carsWithTypes : CarAndType[];
   // branches:Branches = new Branches();


  constructor(private myHttpClient: HttpClient) {
    //this.getCars();
   }

    public getCars() {
        return this.myHttpClient.get(this.link + '/api/car/all')       
    }


    public getCarTypes() {
        return this.myHttpClient.get(this.link+ '/api/carType/all')            
    }

   


    public OrderCar(startRent : string,endRent : string,userNumber : number,carNumber : number){
         let  data =  {
            StartDate: startRent,
            EndDate: endRent,
            ActualReturnDate: null,
            UserNumber:userNumber,
            CarNumber: carNumber
        };
        const link = this.link + '/api/order/neworder';
        this.myHttpClient.post<boolean>(link ,JSON.stringify(data),{ headers: {"content-type": "application/json" }}).subscribe(()=>{
            alert('success')
        },
        ()=>{alert('failed')});
    }



   
}

   




