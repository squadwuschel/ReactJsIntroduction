// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CounterComponent = (function (_super) {
    __extends(CounterComponent, _super);
    function CounterComponent(props, context) {
        _super.call(this, props, context);
        this.state = {
            counter: this.props.startValue
        };
    }
    CounterComponent.prototype.add = function () {
        this.setState({ counter: this.state.counter + 1 });
    };
    CounterComponent.prototype.setCounter = function (event) {
        this.setState({ counter: parseInt(event.target.value) });
    };
    CounterComponent.prototype.render = function () {
        return React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-md-2"}, React.createElement("button", {className: "btn btn-default btn-block", onClick: this.add.bind(this)}, "Counter: ", this.state.counter)), React.createElement("div", {className: "col-md-6"}, React.createElement("div", {className: "form-group"}, React.createElement("label", null, "Counter"), React.createElement("input", {type: "text", className: "form-control", placeholder: "Counter Value", value: this.state.counter, onChange: this.setCounter.bind(this)}))));
    };
    return CounterComponent;
}(React.Component));
//# sourceMappingURL=counterComponent.js.map