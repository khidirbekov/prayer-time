import React from 'react'
import './style.css'

export default ({ image, name, time }) => {
  return (
    <div className='prayer-card' style={{ backgroundImage: 'url(' + image + ')' }}>
      <div className='prayer-card__name'>{name}</div>
      <div className='prayer-card__time'>{time}</div>
    </div>
  )
}
