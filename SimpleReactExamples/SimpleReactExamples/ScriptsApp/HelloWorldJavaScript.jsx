
//https://templecoding.com/blog/2015/12/11/using-react-typescript-webpack-and-visual-studio/

var Counter = React.createClass({
  add: function() {
    console.log('add 1!');
  },

  render: function() {
    return <div>
      <h1>Counter</h1>
      <button onClick={this.add}>+</button>
    </div>
  }
});

ReactDOM.render(<Counter />, document.getElementById('example'));
