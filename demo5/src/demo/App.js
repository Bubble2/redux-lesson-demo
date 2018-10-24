import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

import './index.css';
import Satin from './Satin';
import rootReducer from './redux/reducer';

const App = () =>{
    //创建store
    const store = createStore(
        rootReducer,
        applyMiddleware(thunk)
    );

    ReactDOM.render(
        <Provider store={store}>
            <Satin/>
        </Provider>,
        document.getElementById('root')
    )
}

export default App;
