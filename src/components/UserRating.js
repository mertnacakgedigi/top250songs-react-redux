import React, { Component } from 'react'
import { connect } from "react-redux"
import * as actions from '../store/actions/apiAction'

class UserRating extends Component {
    state ={
        rating: Number,
        user_id:localStorage.getItem("uid"),
        song_id:this.props.song_id
    }
    handleChange = (event) => {
        this.setState({
            rating : event.target.value,
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.postRating(this.state)
        window.location.reload()
    }
    render() {
        console.log(this.props)
        return (
            <td >
            <input onChange={this.handleChange} value={this.state.rating} name="rating" />
            <button onClick={this.handleSubmit}>Submit</button>
            </td>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      rating : state.listReducer.userRating
    }
}

const mapDispactToProps = (dispatch) => {
    return {
        postRating : (data) => dispatch(actions.postRatingAction(data))
    }
}
export default connect(mapStateToProps,mapDispactToProps)(UserRating)