"use client";

import React, { useState } from "react";

const Rating = ({ maxStars = 5 }: { maxStars?: number }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  // Handler for clicking on a star to set the rating
  const handleRating = (index: number) => {
    setRating(index);
  };

  // Handler for hovering over a star
  const handleHover = (index: number) => {
    setHoverRating(index);
  };

  // Handler to remove hover effect
  const handleMouseOut = () => {
    setHoverRating(0);
  };

  return (
    <div className="flex items-center gap-1">
      {[...Array(maxStars)].map((_, index) => {
        const starIndex = index + 1;
        return (
          <svg
            key={starIndex}
            xmlns="http://www.w3.org/2000/svg"
            fill={starIndex <= (hoverRating || rating) ? "#FDAB15" : "none"}
            color="#FDAB15"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 cursor-pointer"
            onClick={() => handleRating(starIndex)}
            onMouseEnter={() => handleHover(starIndex)}
            onMouseLeave={handleMouseOut}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>
        );
      })}
    </div>
  );
};

export default Rating;

{
  /* <Rating />
    maxStars={5} defines the maximum number of stars to display
    rating defines the current rating value or tracks the selected rating value
    handleRating updates the rating state when a star is clicked 
    hoverRating defines the current hover rating value
    handleHover updates the hover rating state when a star is hovered
    handleMouseOut removes the hover effect when the mouse leaves a star 
    
    
    */
}
