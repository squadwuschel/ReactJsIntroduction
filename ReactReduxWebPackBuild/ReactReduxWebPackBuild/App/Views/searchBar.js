"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
//ClassExport
var SearchBar = (function (_super) {
    __extends(SearchBar, _super);
    //public state : ISearchProps;
    function SearchBar(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { term: 'blubb' };
        return _this;
    }
    SearchBar.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("input", { onChange: this.onInputChange, value: "{this.state.term}" }),
            "Value of the Input: ",
            this.state.term));
    };
    SearchBar.prototype.onInputChange = function (event) {
        console.log(event.target.value);
        this.setState({ term: event.target.value });
    };
    return SearchBar;
}(React.Component));
exports.SearchBar = SearchBar;
//# sourceMappingURL=searchBar.js.map