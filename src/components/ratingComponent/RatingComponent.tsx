import React from 'react'


type RatingProps = {
    rating: number,
    size: number
}
const RatingComponent = ({rating, size}: RatingProps) => {
    return (
        <div>
            
        </div>
        // <ReactStars
        //     count={rating}
        //     size={size}
        //     activeColor="lavender"
        // />
    )
}

export default RatingComponent;
