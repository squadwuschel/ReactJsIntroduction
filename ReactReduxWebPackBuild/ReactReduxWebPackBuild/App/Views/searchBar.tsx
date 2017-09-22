import * as React from 'react';

//functExport
//export const SearchBar = () => {
//    return <input value="" />;
//}

export interface ISearchProps {
    term : string;
}


//ClassExport
export class SearchBar extends React.Component<ISearchProps, {}> {
    public state : ISearchProps;

    constructor(props: ISearchProps) {
        super(props);

        this.state =  { term: props.term };

    }

    public render() {
        return (
        <div>
                <input onChange={this.onInputChange} value="" />
                Value of the Input: {this.state.term}
            </div>
        );
    }

    public onInputChange(event : any) {
        console.log(event.target.value);
        this.setState({ term : event.target.value });
    }


}

