using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02_BOL
{
    public class CarTypesModel
    {
        [Required]
        public int CarTypeID { get; set; }

        [Required, MaxLength(20)]
        public string SupplierName { get; set; }

        [Required]
        public string CarModel { get; set; }

        [Required]
        public double DailyCost { get; set; }  //money

        [Required]
        public double DailyDelayCost { get; set; }  //money

        [Required]
        public int ProductionYear { get; set; }

        [Required]
        public bool Transmission { get; set; }
    }
}
