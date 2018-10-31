import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './Hello';

const App = () =>{

    ReactDOM.render(
        <Hello></Hello>,
        document.getElementById('root')
    )
}

export default App;
