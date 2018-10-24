import axios from 'axios';
import {fromJS} from 'immutable' 
import {
    FETCHING_DATA,
    FETCHED_DATA,
    SET_READED
} from './constants';


const fetchingData = () => ({
    type: FETCHING_DATA
})

const fetchedData = (data) => ({
    type:FETCHED_DATA,
    data
})

const fetchDataAsync = () => dispatch => {
    dispatch(fetchingData());
    axios.get('https://www.apiopen.top/satinApi?type=1&page=1').then(res => {
        const data = res.data;
        if(data && data.data.length > 0){
            dispatch(fetchedData(fromJS(data.data)))
        }
    })
}

const setReaded = id => ({
    type:SET_READED,
    id
})

export {
    fetchDataAsync,
    setReaded
}


