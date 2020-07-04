import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../store/actions/apiAction'
import AverageRatingList from '../components/AverageRatingList'
import UserSongRatingList from '../components/UserSongRatingList'


export class Rating extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: null,
            user_id:localStorage.getItem("uid"),
            song_id:this.props.song.id
        }; 
    }  
    
    handleSubmit = ( newRating ) =>{
    
        this.setState({rating : newRating})
        this.props.postRating({rating:parseInt(newRating), 
            user_id:localStorage.getItem("uid"),
             song_id:this.props.song.id})
            window.location.reload()
    }
    
    render() {
        //get average of each song
        const average  = this.props.song.a
        if (average!==null){ var averageFixed = average.toFixed(1)}

        const ratingsCount = this.props.song.c

        //getUsersRatings
        let userRating = this.props.userRatingRedux
        if(userRating!==null){ var songRatingsFromUser = userRating.result.find(element => element.song_id===this.props.song.id)}
        if(songRatingsFromUser !== undefined) {var rating = songRatingsFromUser}
          
        return (
            <>
              <AverageRatingList   count = {ratingsCount}  average={averageFixed} />
              <UserSongRatingList rating ={rating} handleSubmit ={this.handleSubmit} />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      rating : state.listReducer.userRating,
      userRatingRedux : state.listReducer.userRatingList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        postRating : (data) => dispatch(actions.postRatingAction(data)),
        getUserRating : (data) => dispatch(actions.getUserRatingAction(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Rating)

