import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import './index.css';
import Counter, {countNum} from './Counter';

const CounterApp = () =>{
    //创建store
    const store = createStore(combineReducers({countNum}))

    //订阅react渲染方法
    store.subscribe(render);

    render()
    function render(){
        ReactDOM.render(<Counter store={store}/>,
            document.getElementById('root'))
    }
}

export default CounterApp;