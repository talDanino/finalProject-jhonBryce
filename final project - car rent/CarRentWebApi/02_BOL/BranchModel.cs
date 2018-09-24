using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace _02_BOL
{
    public class BranchModel
    {
        [Required]
        public string Address { get; set; }

        [Required]
        public int Latitude { get; set; }

        [Required]
        public int Longitude { get; set; }

        [Required, MinLength(2), MaxLength(30)]
        public string BranchName { get; set; }

    }
}
