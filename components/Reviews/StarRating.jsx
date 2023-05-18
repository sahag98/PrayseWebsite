import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating); // Number of full stars

  const renderStars = () => {
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<AiFillStar size={30} color='#c4c400' />);
    }
    return stars;
  };

  return <div>{renderStars()}</div>;
};

export default StarRating;
