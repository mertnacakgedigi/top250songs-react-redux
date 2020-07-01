import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../store/actions/apiAction'
import { FaStar } from 'react-icons/fa'
import StarRatings from 'react-star-ratings';
import "./star.css"
import UserRating from './UserRating'
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
    
        // console.log(newRating)
        this.setState({rating : newRating})
        // console.log(this.state.rating)
        this.props.postRating({rating:parseInt(newRating), 
            user_id:localStorage.getItem("uid"),
             song_id:this.props.song.id})
            window.location.reload()
      }
    

    render() {
        let userRating = this.props.userRatingRedux
        if(userRating!==null){ var filtered = userRating.result.find(element => element.song_id===this.props.song.id)}
       
       if(filtered !== undefined) {var rating = filtered}
       
        const a  = this.props.song.a
        if (a!==null){ var b = a.toFixed(1)}
        console.log(b)
     
        return (
     
            <>
            <td>         
            { typeof b !== "undefined" ?         
        <>  <StarRatings
          rating={parseInt(b)}
          starRatedColor="blue"
          changeRating={this.handleSubmit}
          numberOfStars={10}
          name='rating'
          starDimension ="15px"
          starSpacing="0px"
          isSelectable="false"

        /> <span>{b}</span>  </>
        :
        <StarRatings
        rating= {0}
        starRatedColor="blue"
        changeRating={this.handleSubmit}
        numberOfStars={10}
        name='rating'
        starDimension ="15px"
        starSpacing="0px"

      /> 
        } </td>
            <td colSpan="2">
 
            { typeof rating !== "undefined" ?         
        <StarRatings
          rating={rating.r}
          starRatedColor="blue"
          changeRating={this.handleSubmit}
          numberOfStars={10}
          name='rating'
          starDimension ="15px"
          starSpacing="0px"

        /> :
        <StarRatings
        rating= {0}
        starRatedColor="blue"
        changeRating={this.handleSubmit}
        numberOfStars={10}
        name='rating'
        starDimension ="15px"
        starSpacing="0px"

      /> 
        }
            </td>
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

