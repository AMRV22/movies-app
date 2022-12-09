import React from 'react';
import { ReactComponent as StarsIcon } from "@/assets/svg/stars.svg";

type RatingProps = {
    rating: number,
    size: number
}
const RatingComponent = ({ rating, size }: RatingProps) => {
    return (
        <div className='flex items-center'>
            {[...Array(5)].map((star, index) => {
                let filled = (index + 1) <= rating;
        
                return (
                    <StarsIcon
                        key={index}
                        className={`stroke-lavender ${filled ? "fill-lavender" : ""} stroke-2 h-${size} w-${size} `}
                    />
                );
            })}
        </div>
    )
}

export default RatingComponent;
