"use strict";
var React = require("react");
var ReactDOM = require("react-dom");
var searchBar_1 = require("./Views/searchBar");
var App = function () {
    return React.createElement("div", null,
        "HALLO WELT App One???",
        React.createElement(searchBar_1.SearchBar, null));
};
ReactDOM.render(React.createElement(App, null), document.querySelector('.appOne'));
//# sourceMappingURL=appOne.js.map