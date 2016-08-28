// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var HelloWorld = (function (_super) {
    __extends(HelloWorld, _super);
    function HelloWorld() {
        _super.apply(this, arguments);
    }
    HelloWorld.prototype.render = function () {
        return React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-md-12 well well-sm"}, React.createElement("h1", null, this.props.name, " | AGE: ", this.props.alter === undefined ? 0 : this.props.alter), React.createElement("p", null, this.props.description)));
    };
    return HelloWorld;
}(React.Component));
//# sourceMappingURL=helloWorld.js.map