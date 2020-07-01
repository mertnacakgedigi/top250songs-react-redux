
const initialState = {
    list : [],
    rating: [],
    userRating : null,
    userRatingList : null,
}

const listReducer = (state= initialState, action) => {
   switch (action.type){
       case "GET_LIST":
           return {
            ...state,
            list: action.data
           }
        case "GET_RATING" :
            return {
                ...state,
                rating: action.data
            }
        case "POST_RATING" :
            return {
                ...state,
                userRating : action.data
            }
        case "USER_RATING" :
            return {
                ...state,
                userRatingList : action.data
            }
        
        default:
            return state
   }
}


export default listReducer