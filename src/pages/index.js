import React, { useState, useEffect } from 'react'
import Header from '../components/header'
import './style.css'
import { themes } from '../configs/themes'
import PrayerCards from '../components/prayer-cards'

import { connect } from 'react-redux'

const mapStateToProps = ({ darkTheme }) => {
  return {
    darkTheme
  }
}

const Main = ({ darkTheme }) => {
  const [theme, setTheme] = useState(darkTheme)
  const changeColorTheme = (value) => {
    setTheme(value)
  }

  useEffect(() => {
    setTheme(darkTheme)
  }, [darkTheme])

  return (
    <div className='main' style={theme ? themes.dark : themes.light}>
      <Header changeColorTheme={changeColorTheme} themeStatus={theme} />
      <PrayerCards />
    </div>
  )
}

export default connect(mapStateToProps)(Main)
