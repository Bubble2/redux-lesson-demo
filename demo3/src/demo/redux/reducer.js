import {combineReducers} from 'redux';
import {
    FETCHING_DATA,
    FETCHED_DATA
} from './constants';

//reducer
const satin = (state={
    items:[],
    isFetching: false
}, action) => {
    switch(action.type){
        case FETCHING_DATA:
            return {...state, isFetching: true};
        case FETCHED_DATA:
            return {...state, items: action.data, isFetching: false};
        default:
            return state;
    }
}

//合并reducer
const rootReducer = combineReducers({
    satin
})

export default rootReducer;


