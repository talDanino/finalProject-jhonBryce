using _03_BLL;
using _02_BOL;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Collections.Generic;
using System;

namespace CarRentWebApi.Controllers
{
     [EnableCors("*","*","*")]

     [RoutePrefix("api/car")]
    public class CarController : ApiController
    {
        CarManager logic= new CarManager();
        

        [HttpGet]
        [Route("all")]   // access link : /api/car/all
        public HttpResponseMessage GetAllCars()
        {
            try
            {
                List<CarModel> cars = logic.GetAllCars();
                return Request.CreateResponse(HttpStatusCode.OK, cars);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);
            }
        }

    }
}
