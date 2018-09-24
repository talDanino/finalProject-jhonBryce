using _01_DAL;
using _02_BOL;
using System;
using System.Collections.Generic;
using System.Linq;

namespace _03_BLL
{
    public class BranchManager
    {
        //Get all branches:
        public List<BranchModel> GetAllBranches()
        {
            using (CarRentDB1Entities1 db = new CarRentDB1Entities1())
            {
                return db.Branches.Select(b => new BranchModel
                {
                    Address = b.Address,
                    Latitude = b.Latitude,
                    Longitude = b.Longitude,
                    BranchName = b.BranchName

                }).ToList();
            }
        }
    }
}
