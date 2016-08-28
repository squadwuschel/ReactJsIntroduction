using System.Web;
using System.Web.Optimization;

namespace ReactTypeScriptExamples
{
    public class BundleConfig
    {
        // Weitere Informationen zu Bundling finden Sie unter "http://go.microsoft.com/fwlink/?LinkId=301862"
        public static void RegisterBundles(BundleCollection bundles)
        {
            //Bundles für die React Bibliothek und Jquery
            bundles.Add(new ScriptBundle("~/bundles/libraries").Include(
                            "~/Scripts/jquery-{version}.js",
                            "~/node_modules/react/dist/react-with-addons.js",
                            "~/node_modules/react-dom/dist/react-dom.js"));

            //Bundle für unsere React Anwendung                
            bundles.Add(new ScriptBundle("~/bundles/app").Include(
                           "~/ScriptsApp/helloWorld.js"
            ));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));
        }
    }
}
