import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setDarkTheme } from '../../store/actions/theme'
import Header from '../../modules/header'
import ScheduleOfDay from '../../modules/schedule-of-day'
import ScheduleOfMonth from '../../modules/schedule-of-month'

import Footer from '../../modules/footer'
import '../../style.css'
import { Switch, Route, withRouter } from 'react-router-dom'
import Settings from '../settings'

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
  const changeColorTheme = value => {
    setDarkTheme(value)
  }

  const [isMobile] = useState(document.documentElement.clientWidth <= 768)
  console.log(isMobile)

  if (isMobile) {
    return (
      <>
        <Header changeColorTheme={changeColorTheme} themeStatus={theme} />
        <Switch>
          <Route exact path="/">
            <ScheduleOfDay />
          </Route>
          <Route path="/month">
            <ScheduleOfMonth />
          </Route>
          <Route path="/setting">
            <Settings />
          </Route>
        </Switch>
        <Footer />
      </>
    )
  } else {
    return (
      <>
        <Header changeColorTheme={changeColorTheme} themeStatus={theme} />
        <ScheduleOfDay />
        <ScheduleOfMonth />
      </>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))
