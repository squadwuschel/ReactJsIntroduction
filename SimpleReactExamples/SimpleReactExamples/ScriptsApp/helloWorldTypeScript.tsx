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
        return <div>
            <h1>Counter</h1>
            <button onClick={this.add}>+</button>
        </div>
    }
});

ReactDOM.render(<Counter />, document.getElementById('example'));
 
 