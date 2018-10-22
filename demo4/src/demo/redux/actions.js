import axios from 'axios';
import {
    FETCH_DATA,
    SHOW_LOADING,
    HIDE_LOADING
} from './constants';

const showLoading = () => ({
    type:SHOW_LOADING
})

const hideLoading = () => ({
    type:HIDE_LOADING
})

const fetchData = data => ({
    type:FETCH_DATA,
    data
})

const fetchDataAsync = () => dispatch => {
    dispatch(showLoading());
    axios.get('https://www.apiopen.top/satinApi?type=1&page=1').then(res => {
        const data = res.data;
        if(data && data.data.length > 0){
            dispatch(hideLoading());
            dispatch(fetchData(data.data))
        }
    })
}


export {
    fetchDataAsync
}


