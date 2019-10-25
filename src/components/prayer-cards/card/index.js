import React from 'react'
import './style.css'

const Card = ({ image, name, time }) => {
  return (
    <div className='prayer-cards__item' style={{ backgroundImage: 'url(' + image + ')' }}>
      <div className='prayer_cards__item-name'>{name}</div>
      <div className='prayer-cards__item-content'>{time}</div>
    </div>
  )
}

export default Card
