// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
ReactDOM.render(React.createElement("div", null, React.createElement(HelloWorld, {description: "Das ist meine Tolle Hello World Beschreibung", name: "Hallo Welt zu => SquadWuschel", alter: 12}), React.createElement(HelloWorld, {description: "Eine andere Tolle Beschreibung", name: "Hallo Welt zu => Jemand Anderes"}), React.createElement(CounterComponent, {startValue: 10})), document.getElementById("hellowWorld"));
//# sourceMappingURL=mainApp.js.map