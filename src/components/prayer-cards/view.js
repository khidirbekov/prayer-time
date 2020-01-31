import React from 'react'
import './style.css'

import Preloader from '../preloader'

import Card from './card'

const PrayerCards = ({ isLoading, prayers, address }) => {
  const showPrayersCards = () => {
    if (prayers.length) {
      return prayers.map((pray, index) => {
        return <Card key={index} name={pray.name} time={pray.time} image={pray.image} />
      })
    }
  }

  return (
    <section className='prayer-cards container'>
      <div className='prayer-cards--title'>
        Расписание на сегодня
      </div>
      {prayers.length && !isLoading ? showPrayersCards() : <Preloader />}
      <div className='prayer-cards__address'>
        {address}
      </div>
    </section>
  )
}

export default PrayerCards
