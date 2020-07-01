const initialState= {
    currentUser : null
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case "LOGIN" :
            return {
                ...state,
                currentUser:action.data
            }
        case "LOGOUT" :
            return {
                ...state,
                currentUser: null,
            }
        case "REGISTER":
            return state
        default:
            return state
    }
}

export default authReducer
