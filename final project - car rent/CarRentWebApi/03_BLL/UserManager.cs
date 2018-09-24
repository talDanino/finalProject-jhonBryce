using _02_BOL;
using _01_DAL;
using System;
using System.Collections.Generic;
using System.Linq;

namespace _03_BLL
{
    public class UserManager
    {
        //Get all users:
        public List<UserModel> GetAllUsers()
        {
            using (CarRentDB1Entities1 db= new CarRentDB1Entities1())
            {
                return db.Users.Select(u => 
                new UserModel
                {
                    FullName = u.FullName,
                    Id = u.Id,
                    UserName = u.UserName,
                    //BirthDate = u.BirthDate,
                    Gender = u.Gender,
                    Email = u.Email,
                    Password = u.Password,
                    UserRole = u.UserRole,

                }).ToList();
            }
        }

        //add user
        static public bool InsertUser(UserModel newUser)
        {
            try
            {
                using (CarRentDB1Entities1 ef = new CarRentDB1Entities1())
                {
                    User newDbUser = new User
                    {
                        UserID = newUser.UserID,
                        FullName = newUser.FullName,
                        Id = newUser.Id,
                        UserName = newUser.UserName,
                        BirthDate = DateTime.Now,
                        Gender = newUser.Gender,
                        Email = newUser.Email,
                        Password = newUser.Password,
                        UserRole = newUser.UserRole
                    };

                    ef.Users.Add(newDbUser);
                    ef.SaveChanges();
                    return true;

                }
            }
            catch (Exception)
            {
                return false;
            }
        }

        static public UserModel SelectUserByUserNameAndPassword(string userName, string password)
        {
            try
            {
                using (CarRentDB1Entities1 ef = new CarRentDB1Entities1())
                {
                    User selectedUser = ef.Users.FirstOrDefault(dbUser => (dbUser.UserName == userName && dbUser.Password == password));
                    if (selectedUser == null)
                        return null;

                    return new UserModel
                    {
                        UserID = selectedUser.UserID,
                        FullName = selectedUser.FullName,
                        Id = selectedUser.Id,
                        UserName = selectedUser.UserName,
                        BirthDate = selectedUser.BirthDate,
                        Gender = selectedUser.Gender,
                        Email = selectedUser.Email,
                        Password = selectedUser.Password,
                        UserRole = selectedUser.UserRole
                    };
                }

            }
            catch (Exception)
            {
                return null;
            }

        }


        static public UserModel SelectUserByUserId(int userId)
        {
            try
            {
                using (CarRentDB1Entities1 ef = new CarRentDB1Entities1())
                {

                    User selectedUser = ef.Users.FirstOrDefault(dbUser => dbUser.UserID == userId);
                    if (selectedUser == null)
                        return null;

                    return new UserModel
                    {
                        UserID = selectedUser.UserID,
                        FullName = selectedUser.FullName,
                        Id = selectedUser.Id,
                        UserName = selectedUser.UserName,
                        BirthDate = selectedUser.BirthDate,
                        Gender = selectedUser.Gender,
                        Email = selectedUser.Email,
                        Password = selectedUser.Password,
                        UserRole = selectedUser.UserRole
                    };

                }
            }
            catch (Exception)
            {
                return null;
            }
        }




    }

}
