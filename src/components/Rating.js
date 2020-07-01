import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../store/actions/apiAction'
import { FaStar } from 'react-icons/fa'
import "./star.css"
export class Rating extends Component {
    
    state ={
        rating: null,
        user_id:localStorage.getItem("uid"),
        song_id:this.props.song.id
    }

    componentwillMount=() => {
        // this.props.getUserRating({user_id:localStorage.getItem("uid"),
        // song_id:this.props.song.id})
    }
  

      handleSubmit = ( event ) =>{
        let newRating = event.target.parentNode.dataset.value
        console.log(newRating)
        this.setState({rating : newRating})
        // console.log(this.state.rating)
        this.props.postRating({rating:parseInt(newRating), 
            user_id:localStorage.getItem("uid"),
             song_id:this.props.song.id})
        window.location.reload()
      }
    

    render() {
    
        const a  = this.props.song.a
        if (a!==null){ var b = a.toFixed(1)}
        console.log(this.props)
     
        return (
     
            <>
            <td>****{b}</td>
            <td colSpan="2">
            <FaStar className="star" size={12} onClick={this.handleSubmit} data-value="1"/>
            <FaStar className="star" size={12} onClick={this.handleSubmit} data-value="2"/>
            <FaStar className="star" size={12} onClick={this.handleSubmit} data-value="3"/>
            <FaStar className="star" size={12} onClick={this.handleSubmit} data-value="4"/>
            <FaStar className="star" size={12} onClick={this.handleSubmit} data-value="5"/>
            <FaStar className="star" size={12} onClick={this.handleSubmit} data-value="6"/>
            <FaStar className="star" size={12} onClick={this.handleSubmit} data-value="7"/>
            <FaStar className="star" size={12} onClick={this.handleSubmit} data-value="8"/>
            <FaStar className="star" size={12} onClick={this.handleSubmit} data-value="9"/>
            <FaStar className="star" size={12} onClick={this.handleSubmit} data-value="10"/>
           {/* <p>{this.props.userRating[0]}</p>  */}
       
            </td>
            </>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
      rating : state.listReducer.userRating,
      userRating : state.listReducer.userRatingList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        postRating : (data) => dispatch(actions.postRatingAction(data)),
        getUserRating : (data) => dispatch(actions.getUserRatingAction(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Rating)

