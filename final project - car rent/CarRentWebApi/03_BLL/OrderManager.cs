using _01_DAL;
using _02_BOL;
using System;
using System.Collections.Generic;
using System.Linq;

namespace _03_BLL
{
    public class OrderManager
    {
        //Get all orders:
        public List<OrderModel> GetAllOrders()
        {
            using (CarRentDB1Entities1 db = new CarRentDB1Entities1())
            {
                return db.Orders.Select(o => new OrderModel
                {
                    StartDate = o.StartDate,
                    EndDate = o.EndDate,
                    ActualReturnDate = o.ActualReturnDate,
                    UserNumber = o.UserNumber,
                    CarNumber = o.CarNumber

                }).ToList();
            }
        }

        //add order
        static public bool InsertOrder(OrderModel newOrder)
        {
            try
            {
                using (CarRentDB1Entities1 ef = new CarRentDB1Entities1())
                {
                    Order newDbOrder = new Order
                    {
                        StartDate = newOrder.StartDate,
                        EndDate = newOrder.EndDate,
                        ActualReturnDate = newOrder.ActualReturnDate,
                        UserNumber = newOrder.UserNumber,
                        CarNumber = newOrder.CarNumber
                    };

                    ef.Orders.Add(newDbOrder);
                    ef.SaveChanges();
                    return true;

                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return false;
            }
        }
    }
}
