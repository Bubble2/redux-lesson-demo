import {
    FETCHING_DATA,
    FETCHED_DATA
} from './constants';


const fetchingData = () => ({
    type: FETCHING_DATA
})

const fetchedData = (data) => ({
    type:FETCHED_DATA,
    data
})


export {
    fetchingData,
    fetchedData
}


