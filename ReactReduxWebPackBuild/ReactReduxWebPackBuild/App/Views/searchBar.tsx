import * as React from 'react';

//functExport
//export const SearchBar = () => {
//    return <input value="" />;
//}


//ClassExport
export class SearchBar extends React.Component<{}, {}> {
    constructor() {
        super();
    }

    public render() {
        return (
            <input value=""/>
        );
    }
}

