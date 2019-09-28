import React from 'react'
import './style.css'

const Card = ({ image, name, time }) => {
  return (
    <div className='prayer-cards__item' style={{ backgroundImage: 'url(' + image + ')' }}>
      <div className='prayer-cards__item__content'>
        <p className='prayer_cards__item-name'>{name}</p>
        <p>{time}</p>
      </div>
    </div>
  )
}

export default Card
