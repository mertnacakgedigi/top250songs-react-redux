import React, {Component} from 'react';
import { connect } from 'react-redux'
import * as actions from '../store/actions/apiAction'
import UserRating from './UserRating'
import GeneralRating from './GeneralRating'
import TopSongList from './TopSongList'
import Table from 'react-bootstrap/Table'
import Rating from './Rating'

class Home extends Component {
  
  componentDidMount(){
    this.props.getList()
    // this.props.getRating()
   
  }
  render () {
    //  console.log(this.props.rating)
     const found = this.props.rating.filter(element => element.song_id===this.props.song_id)
     console.log(found)
     var total =0
      found.forEach(element => total = total + element.rating)
  

     let average = total/found.length
     var n = average.toFixed(1);
    //  console.log(n)
    console.log(localStorage.getItem("uid"))
   const list = this.props.list.map((song,idx)=> {
    const data = {
      user_id : localStorage.getItem('uid'),
      song_id:song.id
    }
    //  this.props.getUserRating(data)
     return (<tr>
    <TopSongList song={song} key={song.id.toString()} index={idx+1}/>
    <Rating rating = {this.props.rating} song = {song} key ={song.id+"key"}/>
     {/* <GeneralRating rating = {this.props.rating} song_id ={song.id}/>
     <UserRating song_id ={song.id}/> */}
     </tr>)
   })
    return (   
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Song</th>
                  <th>Artist</th>
                  <th>General Rating</th>
                  <th>User Rating</th>
                </tr>
              </thead>
              <tbody>
             
                {list}
           
              </tbody>
            </Table>
    )
  }
}



const mapStateToProps = (state) => {
  return {
    list : state.listReducer.list,
    rating : state.listReducer.rating,
    userRating : state.listReducer.userRating
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getList : () => dispatch(actions.getListAction()),
    getRating : ()=> dispatch(actions.getRatingAction()),
    getUserRating : (data) => dispatch(actions.getUserRatingAction(data))

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
