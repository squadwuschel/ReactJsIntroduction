
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import * as ts from "./HttpServices/homejQueryTs"


const App = () => {
    return <div>
               HALLO WELT App One???
           </div>;
}


ReactDOM.render(
    <App />,
    document.querySelector('.appOne') as HTMLElement
);