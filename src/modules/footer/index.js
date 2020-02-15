import React from 'react'

import './style.css'

import prayerImg from '../../assets/images/prayer.svg'
import calendarImg from '../../assets/images/calendar.svg'
import settingsImg from '../../assets/images/settings.svg'


export default () => {
  return (
    <footer className='footer'>
      <img src={prayerImg} alt='day' />
      <img src={calendarImg} alt='month' />
      <img src={settingsImg} alt='setting' />
    </footer>
  )
}