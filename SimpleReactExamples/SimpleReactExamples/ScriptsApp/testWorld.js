
//https://templecoding.com/blog/2015/12/11/using-react-typescript-webpack-and-visual-studio/

'use strict';

var Counter = React.createClass({
  displayName: 'Counter',

  add: function add() {
    console.log('add 1!');
  },

  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        'Counter'
      ),
      React.createElement(
        'button',
        { onClick: this.add },
        '+'
      )
    );
  }
});

ReactDOM.render(React.createElement(Counter, null), document.getElementById('example'));

