using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02_BOL
{
    public class CarModel
    {
        [Required]
        public int CarID { get; set; }

        [Required]
        public int CarType { get; set; }

        [Required]
        public int CurrentMileage { get; set; }

        [Required]
        public bool GoodForRent { get; set; }

        [Required, MaxLength(8)]
        public string CarNumber { get; set; }

        [Required]
        public int Branch { get; set; }

        [Required]
        public string CarImage { get; set; }

    }
}
