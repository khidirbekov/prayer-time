import React, { useState, useEffect } from 'react'
import Header from '../modules/header'
import './style.css'
import { themes } from '../configs/themes'

import ScheduleOfDay from '../modules/schedule-of-day'

import { connect } from 'react-redux'

const mapStateToProps = ({ theme }) => {
  return {
    theme
  }
}

const Main = ({ theme }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(theme.isDark)
  const changeColorTheme = (value) => {
    setIsDarkTheme(value)
  }

  useEffect(() => {
    setIsDarkTheme(theme.isDark)
  }, [theme.isDark])

  return (
    <div className='main' style={isDarkTheme ? themes.dark : themes.light}>
      <Header changeColorTheme={changeColorTheme} themeStatus={theme} />
      <ScheduleOfDay />
    </div>
  )
}

export default connect(mapStateToProps)(Main)
