import './App'

import React from 'react';
import ReactDOM from 'react-dom';

const HelloWorld = () => {
    return React.createElement('div', null, 'Hello World');
}

ReactDOM.render(<HelloWorld />, document.getElementById("root"));