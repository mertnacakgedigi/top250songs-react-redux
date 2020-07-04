import axios from 'axios'

const REACT_APP_API_URL = "http://localhost:3030/api/v1/auth"

export default class UserModel {
  static create(data) {
    // we could add { withCredentials: true } to the axios request below if we want to log the user in upon signup
    let request = axios.post(`${REACT_APP_API_URL}/register`, data)
    return request
  }
  
  static login(credentials) {
    let request = axios.post(`${REACT_APP_API_URL}/login`, credentials, {
      withCredentials: true,
    })
    return request
  }

  static logout() {
    let request = axios.delete(`${REACT_APP_API_URL}/logout`, { withCredentials: true })
    return request
  }
}
