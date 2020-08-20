
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
           let temp = [...state.list]
           let findIndex = temp.findIndex(element => element.id ===action.data.song_id)
            temp[findIndex].a = (temp[findIndex].c*temp[findIndex].a + action.data.rating)/(temp[findIndex].c + 1)
            temp[findIndex].c = temp[findIndex].c + 1

            // let tempUserRate = [...state.userRatingList]
            // let findIndexUser = tempUserRate.findIndex(element => element.id ===action.data.song_id)

            

            temp.sort((a,b)=> b.a  - a.a)
            return {
                ...state,
                userRating : action.data,
                list : temp
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