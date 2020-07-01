import { combineReducers } from 'redux'
import authReducer from './authReducer'
import listReducer from './listReducer'

const rootReducer = combineReducers({
    authReducer,
    listReducer
})

export default rootReducer