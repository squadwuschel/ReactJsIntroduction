//Warning this file was dynamicly created.
//Please don't change any code it will be overwritten next time the template is executed.
//Created on 19.09.2017 time 19:26 from squad.
var App;
(function (App) {
    var JqueryServices;
    (function (JqueryServices) {
        var homejQueryTs = (function () {
            function homejQueryTs() {
            }
            homejQueryTs.prototype.getUser = function (age) {
                return jQuery.get('Home/GetUser' + '?age=' + age).then(function (result) { return result; });
            };
            return homejQueryTs;
        }());
        JqueryServices.homejQueryTs = homejQueryTs;
    })(JqueryServices = App.JqueryServices || (App.JqueryServices = {}));
})(App || (App = {}));
//# sourceMappingURL=homejQueryTs.js.map