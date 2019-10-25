import React from 'react'
import './style.css'
import { Icon } from 'antd'

import Card from './card'

const PrayerCards = ({ prayers }) => {
  const showPrayersCards = () => {
    if (prayers.length) {
      return prayers.map((pray, index) => {
        return <Card key={index} name={pray.name} time={pray.time} image={pray.image} />
      })
    }
  }

  return (
    <section className='prayer-cards container'>
      <div className='prayer-cards--title'>Расписание на сегодня</div>
      {prayers.length ? showPrayersCards() : <Icon type='loading' className='prayer-cards__loader' />}
    </section>
  )
}

export default PrayerCards
