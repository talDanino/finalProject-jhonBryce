
export class OrderAndType{
    //---------- type ----------
    CarTypeID: number;
    SupplierName: string;
    CarModel:string;
    //---------- order ----------
    OrderID: number;
    StartDate: Date;
    EndDate: Date;
    ActualReturnDate: Date;
    CarNumber:number;
    //---------- car ---------
    //for connection between type table and order table
    CarID: number;
    CarType: number;

    
}

