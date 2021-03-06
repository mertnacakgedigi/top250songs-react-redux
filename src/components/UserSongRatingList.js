import React, { useState, useEffect } from 'react'
import StarRatings from 'react-star-ratings';
import { connect } from "react-redux"
import { useHistory } from "react-router-dom";

function UserSongRatingList({postRating,song,rating,currentUser,list}) {
    const [songRating, setRating] = useState(5)

    useEffect(()=>{ 
        setRating(rating)

    },[rating])
    
    let history = useHistory()

    let handleSubmit = (newRating) => { 
       
        if(!rating){
            console.log("hey")
            setRating(newRating)

            let ratingData = {
                rating:newRating, 
                user_id:currentUser,
                song_id:song.id
            }
    
            if (currentUser ) {
                postRating(ratingData)
     
            } else {
                history.push('/register')
            }   
        }
    }
    return (  
        <td colSpan="2">        
            <StarRatings
                rating={songRating}
                starRatedColor="blue"
                changeRating={handleSubmit}
                numberOfStars={10}
                name='rating'
                starDimension ="12px"
                starSpacing="0px"
            /> 
            <br/>  
            { typeof songRating !== "undefined"
            ?  <span className="generalRating">&emsp;&emsp;&emsp; {songRating} </span>
            :  <span>&emsp;</span> }
        </td>
    )
}

const mapStoreToProps = (store) => {

  return {
    list : store.listReducer.list,
    currentUser : store.authReducer.currentUser,
  }
}

export default connect(mapStoreToProps)(UserSongRatingList);
