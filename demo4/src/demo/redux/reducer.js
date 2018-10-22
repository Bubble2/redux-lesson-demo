import {combineReducers} from 'redux';
import {
    FETCH_DATA,
    SHOW_LOADING,
    HIDE_LOADING
} from './constants';

//reducer
const isLoading = (state = false, action) => {
    switch(action.type){
        case SHOW_LOADING:
            return true;
        case HIDE_LOADING:
            return false;
        default:
            return state;
    }
}

const satinData = (state=[], action) => {
    switch(action.type){
        case FETCH_DATA:
            return action.data;
        default:
            return state;
    }
}

//合并reducer
const rootReducer = combineReducers({
    satinData,
    isLoading
})

export default rootReducer;


