import axios from 'axios'

const REACT_APP_API_URL = "http://localhost:3030/api/v1"

export default class ListModel {
  static getList(data) {
    // we could add { withCredentials: true } to the axios request below if we want to log the user in upon signup
    let request = axios.get(`${REACT_APP_API_URL}/list`)
    return request
  } 
}
