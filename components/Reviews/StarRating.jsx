import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const StarRating = ({ rating, index }) => {
  const fullStars = Math.floor(rating); // Number of full stars

  const renderStars = () => {
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<AiFillStar size={30} color='#d8d800' />);
    }
    return stars;
  };

  return <div key={index}>{renderStars()}</div>;
};

export default StarRating;
