﻿"use strict";

var Hello = React.createClass({
  displayName: "Hello",

  render: function render() {
    return React.createElement(
      "div",
      null,
      "Hello ",
      this.props.name
    );
  }
});

ReactDOM.render(React.createElement(Hello, { name: "World" }), document.getElementById('helloWorld'));

