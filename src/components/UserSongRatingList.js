import React from 'react'
import StarRatings from 'react-star-ratings';
export default function UserSongRatingList({rating,handleSubmit}) {
    return (

        <td colSpan="2">

        { typeof rating !== "undefined" ?         
        <>  <StarRatings
        rating={rating.r}
        starRatedColor="blue"
        changeRating={handleSubmit}
        numberOfStars={10}
        name='rating'
        starDimension ="12px"
        starSpacing="0px"

        /> <br/> <span className="generalRating">&emsp;&emsp;&emsp;{`   ${rating.r}` }</span> </>
        :
        <> <StarRatings
        rating= {0}
        starRatedColor="blue"
        changeRating={handleSubmit}
        numberOfStars={10}
        name='rating'
        starDimension ="12px"
        starSpacing="0px"

        /> <br/> <span>&emsp;</span></>
        }
        </td>
    )
}
