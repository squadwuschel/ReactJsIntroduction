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
        [AllowAnonymous]
        public ActionResult Index()
        {
            //die Index.html wird von WebPack in das Verzeichnis kopiert und die Standardroute 
            //lädt dann automatisch die index.html
            return new FilePathResult("~/wwwroot/index.html", "text/html");
        }

        [CreateJQueryTsProxy(ReturnType = typeof(User))]
        public ActionResult GetUser(int age)
        {
            return Json(new User() { Age = age, Name = "SquadWuschel" }, JsonRequestBehavior.AllowGet);
        } 


    }
}