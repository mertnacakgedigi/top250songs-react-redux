import React, {Component} from 'react';
import { connect } from 'react-redux'
import * as actions from '../store/actions/apiAction'
import TopSongList from '../components/TopSongList'
import Table from 'react-bootstrap/Table'
import Rating from './Rating'
import ListHeader from '../components/ListHeader'


class Home extends Component {
  state = {
    user_id : localStorage.getItem("uid")
  }
  
  componentDidMount(){
    this.props.getList()
    this.props.getUserRating({user_id:this.state.user_id})
   
  }
  render () {

   const list = this.props.list.map((song,idx)=> {
     return (
     <tr>
      <TopSongList song={song} key={song.id.toString()} index={idx+1}/>
      <Rating rating = {this.props.userRating} song = {song} key ={song.id+"key"}/>
     </tr>)
   })
   
    return (   
            <Table striped bordered hover>
              <ListHeader/>
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
    userRating : state.listReducer.userRating
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getList : () => dispatch(actions.getListAction()),
    getUserRating : (data) => dispatch(actions.getUserRatingAction(data))

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
