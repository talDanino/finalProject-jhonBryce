using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02_BOL
{
    public class UserModel
    {

        public int UserID { get; set; }


        [Required, MaxLength(30)]
        public string FullName { get; set; }

        [Required]
        public string Id { get; set; }

        [Required]
        public string UserName { get; set; }

        //[ DataType(DataType.Date), DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}")]
        public DateTime? BirthDate { get; set; }

        [Required]
        public bool Gender { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }

        [Required]
        public int UserRole { get; set; }  // 1- manager     2- worker    3- visitor





        public string GetUserRole()
        {
            switch (UserRole)
            {
                case 1: return "admin";
                case 2: return "worker";
                default: return "client";
            }
        }

    }
}
