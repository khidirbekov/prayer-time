import React, { useState, useEffect } from 'react'
import Header from '../modules/header'
import './style.css'

import ScheduleOfDay from '../modules/schedule-of-day'
import ScheduleOfMonth from '../modules/schedule-of-month'

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
    <div className={isDarkTheme ? 'dark' : 'light'}>
      <Header changeColorTheme={changeColorTheme} themeStatus={theme} />
      <ScheduleOfDay />
      <ScheduleOfMonth />
    </div>
  )
}

export default connect(mapStateToProps)(Main)
