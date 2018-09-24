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
    [EnableCors("*", "*", "*")]
    [RoutePrefix("api/order")]
    public class OrderController : ApiController
    {
        OrderManager logic = new OrderManager();

        [HttpGet]
        [Route("all")]  //access link : /api/order/all
        public HttpResponseMessage GetAllOrders()
        {
            try
            {
                List<OrderModel> orders = logic.GetAllOrders();
                return Request.CreateResponse(HttpStatusCode.OK, orders);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);
            }
        }

        // POST: api/order/neworder
        [HttpPost]
        [Route("neworder")]   // access link: /api/order/neworder
        public HttpResponseMessage Post(OrderModel value)
        {

            bool insertResult = false;

            //ModelState is the parameter that we got to the Post function (value in our case)
            if (ModelState.IsValid)
            {
                insertResult = OrderManager.InsertOrder(value);
            }

            HttpStatusCode responseCode = insertResult ? HttpStatusCode.Created : HttpStatusCode.BadRequest;

            return new HttpResponseMessage(responseCode) { Content = new ObjectContent<bool>(insertResult, new JsonMediaTypeFormatter()) };
        }
    }
}
