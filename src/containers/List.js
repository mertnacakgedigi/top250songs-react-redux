import React, {Component} from 'react';
import { connect } from 'react-redux'
import * as actions from '../store/actions/apiAction'
import TopSongList from '../components/TopSongList'
import Table from 'react-bootstrap/Table'
import Rating from './Rating'
import ListHeader from '../components/ListHeader'


class Home extends Component {
  state = {
    visible :20
  }

  loadMore =() => {
    this.setState((prev) => {
      return {visible: prev.visible + 20};
    });
  }
  
  componentDidMount(){
    this.props.getList()
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentUser !== prevProps.currentUser) {
      this.props.getUserRating({user_id:this.props.currentUser})
    }
  }
  

  render () {
   const list = this.props.list.slice(0,this.state.visible).map((song,idx)=> {  
     return (
     <tr>
      <TopSongList song={song} key={song.id.toString()} index={idx+1}/>
      <Rating rating = {this.props.userRating} song = {song} key ={song.id+"key"}/>
     </tr>
     )
   })
   
    return (   
      <React.Fragment>   
        <Table striped borderless hover>
          <ListHeader/>
          <tbody>
            {list}
          </tbody>
        </Table>
        <button onClick={this.loadMore} type="button" className="load-more">Load more</button>
      </React.Fragment>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    list : state.listReducer.list,
    userRating : state.listReducer.userRating,
    currentUser : state.authReducer.currentUser,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getList : () => dispatch(actions.getListAction()),
    getUserRating : (data) => dispatch(actions.getUserRatingAction(data))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Home);
