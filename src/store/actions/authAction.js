
import UserModel from '../../models/auth'

const login = (data) => {
    return {
        type : "LOGIN",
        data
    }
}

export const loginAction = (props) => {
    return (dispatch) => {
        UserModel.login(props)
            .then(res => {
                dispatch(login(res.data.data))
                localStorage.setItem('uid', res.data.data)
            })
            .catch(err=> console.log(err))
    }
}

const logout = () => {
    return {
        type:"LOGOUT"
    }
}

export const logoutAction = () => {
  
    return(dispatch) => {
        localStorage.removeItem('uid')
        UserModel.logout()
            .then(res => {
            
                dispatch(logout());
               
            })
            .catch(err => console.log(err))
    }
}

const register = (data) => {
    return {
        type: "REGISTER",
        data
    }
}

export const registerAction = (data) => {
    return(dispatch) => {
        UserModel.create(data)
            .then(res => {
                dispatch(register(res.data.data))
            })
            .catch(err => console.log(err))
    }
}


