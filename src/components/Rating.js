import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../store/actions/apiAction'
import StarRatings from 'react-star-ratings';
import "./star.css"

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
        const c = this.props.song.c
        if (a!==null){ var b = a.toFixed(1)}
        console.log(parseInt(b))
     
        return (
     
            <>
            <td>         
            { typeof b !== "undefined" ?         
        <>  <StarRatings
          rating={parseFloat(b)}
          starRatedColor="blue"
          changeRating={this.handleSubmit}
          numberOfStars={10}
          name='rating'
          starDimension ="12px"
          starSpacing="0px"
          isSelectable="false"

        /> <br/> <span style={{fontSize:"15px",color:"black",textAlign:"center"}}>&emsp;{b}<span style={{fontSize:"12px",color:"grey", textAlign:"center"}}>{`  (${c} ratings)`}</span></span>  </>
        :
       <> <StarRatings
        rating= {0}
        starRatedColor="blue"
        changeRating={this.handleSubmit}
        numberOfStars={10}
        name='rating'
        starDimension ="12px"
        starSpacing="0px"

      /> <br/> <span style={{fontSize:"1px",color:"black",textAlign:"center"}}>c</span></>
        } </td>
            <td colSpan="2">
 
            { typeof rating !== "undefined" ?         
        <>  <StarRatings
          rating={rating.r}
          starRatedColor="blue"
          changeRating={this.handleSubmit}
          numberOfStars={10}
          name='rating'
          starDimension ="12px"
          starSpacing="0px"

        /> <br/> <span style={{fontSize:"15px",color:"black",textAlign:"center"}}>&emsp;&emsp;&emsp;{`   ${rating.r}` }</span> </>
        :
        <> <StarRatings
        rating= {0}
        starRatedColor="blue"
        changeRating={this.handleSubmit}
        numberOfStars={10}
        name='rating'
        starDimension ="12px"
        starSpacing="0px"

      /> <br/> <span style={{fontSize:"1px",color:"black",textAlign:"center"}}>c</span></>
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

