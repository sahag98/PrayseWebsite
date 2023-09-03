"use client"
import { BsPersonCircle } from 'react-icons/bs'
import './reviews.css'
import StarRating from './StarRating'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState, useEffect } from 'react';
const Reviews = () => {

  const [currentIndex, setCurrentIndex] = useState(0)

  const carouselInfiniteScroll = () => {
    if (currentIndex == reviews.length - 1) {
      return setCurrentIndex(0)
    }
    return setCurrentIndex(currentIndex + 1)
  }

  useEffect(() => {
    const interval = setInterval(() => { carouselInfiniteScroll() }, 5000)

    return () => clearInterval(interval)
  })

  const reviews = [
    {
      id: 1,
      icon: <BsPersonCircle style={{ marginRight: 10 }} color='#6262ff' size={40} />,
      name: 'Ricardo Clemente',
      review: 'Great simple way to keep track of prayer, and good notifications to remind you to take a moment and talk to God.',
      rating: 5
    },
    {
      id: 2,
      icon: <BsPersonCircle style={{ marginRight: 10 }} color='#ffa7ff' size={40} />,
      name: 'Leslie Lopez',
      review: 'Easy and great and simple. I LOVE IT!',
      rating: 5
    },
    {
      id: 3,
      icon: <BsPersonCircle style={{ marginRight: 10 }} color='#FFD68A' size={40} />,
      name: 'Jack Atchabahian',
      review: 'Great application and easy to use',
      rating: 5
    },
    {
      id: 4,
      icon: <BsPersonCircle style={{ marginRight: 10 }} color='#add8e6' size={40} />,
      name: 'Sarona Arzoumanian',
      review: 'I love this app! It is a cool app where you simply add your prayers. Very straightforward and easy to use!',
      rating: 5
    },
  ]
  return (
    <div id='Reviews' className='reviews-container'>
      <h2>Reviews</h2>
      <p style={{ marginBottom: 20 }}>See what some of our users have to say about Prayse.</p>
      <div className='reviews-items'>
        {reviews.map((r) => (
          <div className='review-item' key={r.id} style={{ transform: `translate(-${currentIndex * 100}%)` }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {r.icon}
              <h3>{r.name}</h3>
            </div>
            <p>{r.review}</p>
            <StarRating index={r.id} rating={r.rating} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Reviews