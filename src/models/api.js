import axios from 'axios'

const REACT_APP_API_URL = "http://localhost:3030/api/v1"

export default class ListModel {
  static fetchList(){
    let request = axios.get(`${REACT_APP_API_URL}/list`)
    return request
  } 
  static postUserRating(data) {
    let request = axios.post(`${REACT_APP_API_URL}/rating`,data)
    return request
  }
  static getUserRating(data){
    let request = axios.post(`${REACT_APP_API_URL}/userrating`,data)
    return request
  }

}
