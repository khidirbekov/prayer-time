import React, { useEffect } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import Main from './pages/main'
import SelectCity from './pages/select-city'

import { connect } from 'react-redux'
import { isExist } from './helpers/general'

const mapStateToProps = ({ theme, cities }) => {
  return {
    theme,
    defaultCity: cities.defaultCity
  }
}

const App = ({ theme, defaultCity }) => {
  useEffect(() => {
    if (theme.isDark) {
      document.body.classList.add('dark')
      document.body.classList.remove('light')
    } else {
      document.body.classList.remove('dark')
      document.body.classList.add('light')
    }
  }, [theme.isDark])

  return (
    <div className={theme.isDark ? 'dark' : 'light'}>
      <Router>
        <Switch>
          {isExist(defaultCity)
            ? (
              <>
                <Route path='/'>
                  <Main />
                </Route>
                <Redirect to='/' />
              </>
            )
            : (
              <>
                <Route path='/select-city'>
                  <SelectCity />
                </Route>
                <Redirect to='/select-city' />
              </>
            )}
        </Switch>
      </Router>
    </div>
  )
}

export default connect(mapStateToProps)(App)
