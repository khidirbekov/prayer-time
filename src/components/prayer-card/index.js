import React from 'react'
import './style.css'

const Card = ({ image, name, time }) => {
  return (
    <div className='prayer-card' style={{ backgroundImage: 'url(' + image + ')' }}>
      <div className='prayer_card__name'>{name}</div>
      <div className='prayer-card__time'>{time}</div>
    </div>
  )
}

export default Card
