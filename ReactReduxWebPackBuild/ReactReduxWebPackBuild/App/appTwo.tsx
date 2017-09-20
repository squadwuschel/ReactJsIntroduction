
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import * as ts from "./HttpServices/homejQueryTs"


const App = () => {
    return <div>
               HALLO WELT App Two???
           </div>;
}


ReactDOM.render(
    <App />,
    document.querySelector('.appTwo') as HTMLElement
);