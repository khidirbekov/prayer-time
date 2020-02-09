import React from 'react'
import Header from '../../modules/header'
import '../../style.css'

import { setDarkTheme } from '../../store/actions/theme'

import ScheduleOfDay from '../../modules/schedule-of-day'
import ScheduleOfMonth from '../../modules/schedule-of-month'

import { connect } from 'react-redux'

const mapStateToProps = ({ theme }) => {
  return {
    theme
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setDarkTheme: dispatch(setDarkTheme)
  }
}

const Main = ({ theme }) => {
  const changeColorTheme = (value) => {
    setDarkTheme(value)
  }

  return (
    <>
      <Header changeColorTheme={changeColorTheme} themeStatus={theme} />
      <ScheduleOfDay />
      <ScheduleOfMonth />
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
