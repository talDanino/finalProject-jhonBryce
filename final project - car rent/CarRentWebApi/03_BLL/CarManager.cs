using _01_DAL;
using _02_BOL;
using System;
using System.Collections.Generic;
using System.Linq;

namespace _03_BLL
{
    public class CarManager
    {
        //Get all cars:
        public List<CarModel> GetAllCars()
        {

            using (CarRentDB1Entities1 db = new CarRentDB1Entities1())
            {
                return db.Cars.Select(c =>
                        new CarModel
                        {
                            CarID = c.CarID,
                            CarType = c.CarType,
                            CurrentMileage = c.CurrentMileage,
                            GoodForRent = c.GoodForRent,
                            CarNumber = c.CarNumber,
                            Branch = c.Branch,
                            CarImage = c.CarImage

                        }
                ).ToList();
            }
            
            
        }

    }
}
