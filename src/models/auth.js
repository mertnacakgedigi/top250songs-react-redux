import axios from 'axios'

const REACT_APP_API_URL =  "https://back-top.herokuapp.com/api/v1/auth"


export default class UserModel {
  static create(data) {
    let request = axios.post(`${REACT_APP_API_URL}/register`, data)
    return request
  }
  
  static login(credentials) {
    let request = axios.post(`${REACT_APP_API_URL}/login`, credentials, {
      withCredentials: false,
    })
    return request
  }

  static logout() {
    let request = axios.delete(`${REACT_APP_API_URL}/logout`, { withCredentials: false })
    return request
  }
}
