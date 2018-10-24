import {combineReducers} from 'redux';
import {fromJS} from 'immutable' 
import {
    FETCHING_DATA,
    FETCHED_DATA,
    SET_READED
} from './constants';

//reducer
const satin = (state=fromJS({
    items:[],
    isFetching: false
}), action) => {
    switch(action.type){
        case FETCHING_DATA:
            // return {...state, isFetching: true};
            return state.set('isFetching', true);
        case FETCHED_DATA:
            // return {...state, items: action.data, isFetching: false};
            console.time('FETCHED_DATA开始时间')
            return state.set('isFetching', false).set('items', action.data);
            console.timeEnd('FETCHED_DATA结束时间')
        case SET_READED:
            // return {...state, items: state.items.map(item=>{
            //     if(action.id === item.t){
            //         item.isRead = true;
            //     }
            //     return item;  
            // })}
            const items = state.get('items');
            const newItems = items.map(item => {
                let newItem = item;
                if(item.get('t') === action.id){
                    newItem = item.set('isRead', true);
                }
                return newItem;
            })
            return state.set('items', newItems)
        default:
            return state;
    }
}

//合并reducer
const rootReducer = combineReducers({
    satin
})

export default rootReducer;


