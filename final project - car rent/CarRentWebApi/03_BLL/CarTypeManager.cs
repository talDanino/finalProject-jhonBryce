using _01_DAL;
using _02_BOL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03_BLL
{
    public class CarTypeManager
    {
        //Get all car types:
        public List<CarTypesModel> GetAllCarTypes()
        {
            using (CarRentDB1Entities1 db = new CarRentDB1Entities1())
            {
                return db.CarTypes.Select(ct => 
                new CarTypesModel
                {
                    CarTypeID = ct.CarTypeID,
                    SupplierName = ct.SupplierName,
                    CarModel = ct.CarModel,
                    DailyCost = (double)(ct.DailyCost),
                    DailyDelayCost = (double)(ct.DailyDelayCost),
                    ProductionYear = ct.ProductionYear,
                    Transmission = ct.Transmission

                }).ToList();
            }
        }
    }
}
