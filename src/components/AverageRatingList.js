import React from 'react'
import StarRatings from 'react-star-ratings';

export default function AverageRatingList({count,average}) {
    return (
      <td>    
        { typeof average !== "undefined" ?         
        <>  
        <StarRatings
          rating={parseFloat(average)}
          starRatedColor="blue"
          numberOfStars={10}
          name='rating'
          starDimension ="12px"
          starSpacing="0px"
          isSelectable="false"

        /> 
        <br/> 
        <span className="generalRating" >&emsp;{average}</span>
        <span className="ratingCounts ">{` (${count} ratings)`}</span>  </>
        :
       <> 
       <StarRatings
        rating= {0}
        starRatedColor="blue"
        numberOfStars={10}
        name='rating'
        starDimension ="12px"
        starSpacing="0px"

      /> <br/> <span>&emsp;</span></>
        } </td>
    )
}
