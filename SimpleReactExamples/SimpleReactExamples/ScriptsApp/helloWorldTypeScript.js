/// <reference path="../typings/tsd.d.ts" />
// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
//http://staxmanade.com/2015/08/playing-with-typescript-and-jsx/
var Counter = React.createClass({
    add: function () {
        console.log('add 1!');
    },
    render: function () {
        return React.createElement("div", null, React.createElement("h1", null, "Counter"), React.createElement("button", {onClick: this.add}, "+"));
    }
});
ReactDOM.render(React.createElement(Counter, null), document.getElementById('example'));
//# sourceMappingURL=helloWorldTypeScript.js.map