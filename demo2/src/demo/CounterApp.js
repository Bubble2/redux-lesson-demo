import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import './index.css';
import Counter, {countNum} from './Counter';

const CounterApp = () =>{
    //创建store
    const store = createStore(combineReducers({countNum}))

    ReactDOM.render(<Provider store={store}>
        <Counter/>
    </Provider>,
    document.getElementById('root'))
}

export default CounterApp;