import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import './index.css';
import Satin from './Satin';
import rootReducer from './redux/reducer';

const App = () =>{
    //创建store
    const store = createStore(rootReducer);

    ReactDOM.render(
        <Provider store={store}>
            <Satin/>
        </Provider>,
        document.getElementById('root')
    )
}

export default App;
