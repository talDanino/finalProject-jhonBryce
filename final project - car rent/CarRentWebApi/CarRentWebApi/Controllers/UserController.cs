using _03_BLL;
using _02_BOL;
using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Net.Http.Formatting;

namespace CarRentWebApi.Controllers
{
    [EnableCors("*","*","*")]

    [RoutePrefix("api/user")]
    public class UserController : ApiController
    {
        UserManager logic = new UserManager();

        [HttpGet]
        [Route("all")]   // access link : /api/user/all
        public HttpResponseMessage GetAllUsers()
        {
            try
            {
                List<UserModel> users = logic.GetAllUsers();
                return Request.CreateResponse(HttpStatusCode.OK, users);
            }
            catch(Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);
            }
        }


        // POST: api/User
        [HttpPost]
        [Route("register")]   // access link: /api/user/register
        public HttpResponseMessage Post( UserModel value)
        {

            bool insertResult = false;

            //ModelState is the parameter that we got to the Post function (value in our case)
            if (ModelState.IsValid)
            {
                insertResult = UserManager.InsertUser(value);
            }

            HttpStatusCode responseCode = insertResult ? HttpStatusCode.Created : HttpStatusCode.BadRequest;

            return new HttpResponseMessage(responseCode) { Content = new ObjectContent<bool>(insertResult, new JsonMediaTypeFormatter()) };
        }


        
    }



}
