import React from 'react'
import './style.css'

import { Switch } from 'antd'

import SearchInput from '../search-input'

import { setDarkTheme } from '../../store/actions/theme'
import { connect } from 'react-redux'

const mapStateToProps = ({ theme }) => {
  return {
    theme
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setDarkTheme: (isDarkTheme) => dispatch(setDarkTheme(isDarkTheme))
  }
}

const Header = ({ theme, setDarkTheme, time, themeStatus }) => {
  const handleTheme = (value) => {
    setDarkTheme(value)
  }

  return (
    <header className='header'>
      <div className='header--logo'>
        PrayTime
      </div>
      <SearchInput />
      <div className='header__info'>
        <Switch defaultChecked={theme.isDarkTheme} onChange={(isChecked) => handleTheme(isChecked)} />
        <span className='header__time'>{time}</span>
      </div>
    </header>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
