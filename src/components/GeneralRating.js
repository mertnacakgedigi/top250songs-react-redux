import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../store/actions/apiAction'

class GeneralRating extends Component {

    state = {
        
    }
    componentDidMount() {
   
    }
    render() {
        const found = this.props.rating.filter(element => element.song_id===this.props.song_id)
       var total =0
        found.forEach(element => total = total + element.rating)

       let average = total/found.length
       var n = average.toFixed(1);


        return (
            <td style={{fontSize:"25px", color: 'orange'}}>
            {average? `*****${n}`: "*****"} 
            </td>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      list : state.listReducer.rating,
    }
  }


  const mapDispactToProps = (dispatch) => {
    return {
      getRating : () => dispatch(actions.getRatingAction())
    }
  }


export default connect(mapStateToProps,mapDispactToProps)(GeneralRating);
