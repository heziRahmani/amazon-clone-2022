import React from "react";
import StarHalfIcon from "@mui/icons-material/StarHalf";
export default function ProductRating({ rating = 0 }) {
  //render stars
  const ratingArrey = [];
  for (let i = 0; i < rating; i++) {
    ratingArrey.push(<StarHalfIcon />);
  }
  return (
    <div className='product-rating'>
      {ratingArrey.map((star, i) => {
        return <div key={i}>{star}</div>;
      })}
    </div>
  );
}
