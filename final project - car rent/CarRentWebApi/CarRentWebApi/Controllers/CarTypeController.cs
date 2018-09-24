using _03_BLL;
using _02_BOL;
using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace CarRentWebApi.Controllers
{
    [EnableCors("*", "*", "*")]
    [RoutePrefix("api/carType")]
    public class CarTypeController : ApiController
    {
        CarTypeManager logic = new CarTypeManager();

        [HttpGet]
        [Route("all")]   // access link : /api/carType/all
        public HttpResponseMessage GetAllCarTypes()
        {
            try
            {
                List<CarTypesModel> carTypes = logic.GetAllCarTypes();
                return Request.CreateResponse(HttpStatusCode.OK, carTypes);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);
            }
        }
    }
}
