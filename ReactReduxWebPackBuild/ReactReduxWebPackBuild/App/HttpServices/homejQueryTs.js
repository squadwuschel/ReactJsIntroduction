//Warning this file was dynamicly created.
//Please don't change any code it will be overwritten next time the template is executed.
//Created on 19.09.2017 time 19:26 from squad.
"use strict";
var homejQueryTs = (function () {
    function homejQueryTs() {
    }
    homejQueryTs.prototype.getUser = function (age) {
        return jQuery.get('Home/GetUser' + '?age=' + age).then(function (result) { return result; });
    };
    return homejQueryTs;
}());
exports.homejQueryTs = homejQueryTs;
//# sourceMappingURL=homejQueryTs.js.map