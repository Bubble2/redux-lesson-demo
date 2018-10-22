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


export {
    showLoading,
    hideLoading,
    fetchData
}


