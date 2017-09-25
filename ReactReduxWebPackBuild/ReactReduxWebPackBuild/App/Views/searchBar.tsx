import * as React from 'react';

//functExport
//export const SearchBar = () => {
//    return <input value="" />;
//}

export interface ISearchProps {
    term : string;
}


//ClassExport
export class SearchBar extends React.Component<any, any> {
    //public state : ISearchProps;

    constructor(props : any) {
        super(props);

        this.state =  { term: 'blubb' };

    }

    public render() {
        return (
        <div>
                <input
                    onChange={ (event : any) => this.setState({ term : event.target.value }) }
                    value={this.state.term}
                />
                Value of the Input: {this.state.term}
            </div>
        );
    }
}

