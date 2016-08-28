// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

/**
 * Passendes Props Interface
 */
interface ICounterProps extends React.Props<any> {
    startValue: number;
}

/**
 * Passendendes State Interface
 */
interface ICounterState {
    counter: number;
}

/**
 * Event Target um Value erweitern, damit wir darauf zugreifen können mit Intellisense
 */
interface EventTarget {
    value: any;
}


class CounterComponent extends React.Component<ICounterProps, ICounterState> {

    constructor(props: ICounterProps, context) {
        super(props, context);
        this.state = {
            counter: this.props.startValue
        };
    }

    add(): void {
        this.setState({ counter: this.state.counter + 1 });
    }

    setCounter(event : Event): void {
        this.setState({ counter: parseInt(event.target.value) });
    }


    render() {
        return <div className="row">
            <div className="col-md-2">
                <button className="btn btn-default btn-block" onClick={this.add.bind(this) }>Counter: {this.state.counter}</button>
            </div>
            <div className="col-md-6">
                <div className="form-group">
                    <label>Counter</label>
                    <input type="text" className="form-control" placeholder="Counter Value" value={this.state.counter} onChange={this.setCounter.bind(this)} />
                </div>
            </div>
        </div>;
    }

}