using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Microsoft.Build.Tasks;
using ProxyGenerator.ProxyTypeAttributes;
using ReactReduxWebPackBuild.Models;

namespace ReactReduxWebPackBuild.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        [CreateJQueryTsProxy(ReturnType = typeof(User))]
        public ActionResult GetUser(int age)
        {
            return Json(new User() { Age = age, Name = "SquadWuschel" }, JsonRequestBehavior.AllowGet);
        } 
    }
}