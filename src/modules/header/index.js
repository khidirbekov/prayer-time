import React from 'react'
import './style.css'

import Switch from '../../components/switch'

import Logo from '../../components/logo'
import SearchInput from '../../components/search-input'
import LiveTime from '../../components/live-time'

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

const Header = ({ theme, setDarkTheme }) => {
  const handleTheme = (value) => {
    setDarkTheme(value)
  }

  return (
    <header className='header'>
      <div className='header__container container'>
        <Logo />
        <SearchInput />
        <div className='header__info'>
          <Switch checked={theme.isDarkTheme} onChange={(value) => handleTheme(value)} />
          <LiveTime />
        </div>
      </div>
    </header>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
