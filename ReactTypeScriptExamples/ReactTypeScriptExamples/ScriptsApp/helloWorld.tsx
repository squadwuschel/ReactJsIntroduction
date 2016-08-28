// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

//Quelle TypeScript mit JSX verwenden
//https://github.com/RyanCavanaugh/jsx-intro

interface IHelloWorld extends React.Props<any> {
    name: string;
    description: string;
    alter? : number;
}

class HelloWorld extends React.Component<IHelloWorld, {}> {
    render() {
        return <div className="row">
            <div className="col-md-12 well well-sm">
                <h1>{this.props.name} | AGE: {this.props.alter === undefined ? 0 : this.props.alter}</h1>
                <p>{this.props.description}</p>
            </div>
        </div>;
    }
}


