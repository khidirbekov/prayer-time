import React from 'react'

import './style.css'

import prayerImg from '../../assets/images/prayer.svg'
import calendarImg from '../../assets/images/calendar.svg'
import settingsImg from '../../assets/images/settings.svg'
import { NavLink } from 'react-router-dom'

export default () => {
  return (
    <footer className="footer">
      <NavLink exact activeClassName="footer__link__active" to="/">
        <img src={prayerImg} alt="day" />
      </NavLink>
      <NavLink activeClassName="footer__link__active" to="/month">
        <img src={calendarImg} alt="month" />
      </NavLink>
      <NavLink activeClassName="footer__link__active" to="/setting">
        <img src={settingsImg} alt="setting" />
      </NavLink>
    </footer>
  )
}
