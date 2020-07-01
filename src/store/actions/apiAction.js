import axios from 'axios'

const getList = (data) =>{
    return {
        type: "GET_LIST",
        data
    }
}
export const getListAction = (props) => {
    return (dispatch) => {
        axios.get("http://localhost:3030/api/v1/list")
            .then(res => dispatch(getList(res.data)))
            .catch(err => console.log(err))
    }
}

const getRating = (data) => {
    return {
        type :"GET_RATING",
        data
    }
}

export const getRatingAction = (props) => {
    return (dispatch) => {
        axios.get("http://localhost:3030/api/v1/rating")
            .then(res => dispatch(getRating(res.data)))
            .catch(err => console.log(err))
    }
}
const postRating = (data) => {
    return {
        type : "POST_RATING",
        data
    }
}

export const postRatingAction = (data) => {
    return (dispatch) => {
        axios.post("http://localhost:3030/api/v1/rating",data)
            .then(res => dispatch(postRating(data)))
            .catch(err => console.log(err))
            
    }
}

const getUserRating = (data) => {
    
    return {
        type :"USER_RATING",
        data
    }
}

export const getUserRatingAction = (data) => {

    return(dispatch) => {
        axios.post("http://localhost:3030/api/v1/userrating",data)
            .then(res => {dispatch(getUserRating(res.data))})
            .catch(err => console.log(err))
    }
}