import React from 'react'
import './style.css'

import Card from './card'

const PrayerCards = ({ prayers }) => {
  const showPrayersCards = () => {
    if (prayers.length) {
      return prayers.map((pray, index) => {
        return <Card key={index} name={pray.name} time={pray.time} image={pray.image} />
      })
    }
    return null
  }

  return (
    <section className='prayer-cards'>
      {showPrayersCards()}
    </section>
  )
}

export default PrayerCards
