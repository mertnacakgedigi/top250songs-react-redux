
import ListModel from '../../models/api'

const getList = (data) =>{
    return {
        type: "GET_LIST",
        data
    }
}
export const getListAction = (props) => {
    return (dispatch) => {
        ListModel.fetchList()
            .then(res => dispatch(getList(res.data)))
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
        ListModel.postUserRating(data)
            .then(res => {
                dispatch(postRating(data))
               
            })
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
        ListModel.getUserRating(data)
            .then(res => {dispatch(getUserRating(res.data))})
            .catch(err => console.log(err))
    }
}