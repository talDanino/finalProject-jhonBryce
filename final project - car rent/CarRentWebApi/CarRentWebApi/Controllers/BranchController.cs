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

    [RoutePrefix("api/branch")]
    public class BranchController : ApiController
    {
        BranchManager logic = new BranchManager();

        [HttpGet]
        [Route("all")]   // access link: /api/branch/all

        public HttpResponseMessage GetAllBranches()
        {
            try
            {
                List<BranchModel> branches = logic.GetAllBranches();
                return Request.CreateResponse(HttpStatusCode.OK, branches);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);
            }
        }
    }
}
