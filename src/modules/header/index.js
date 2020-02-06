import React from 'react'
import './style.css'

import Switch from '../../components/switch'

import Logo from '../../components/logo'
import SearchInput from '../../components/search-input'
import LiveTime from '../../components/live-time'

import { setDarkTheme } from '../../store/actions/theme'
import { connect } from 'react-redux'
import { setupCities } from '../../store/actions/cities'
import { setupPrayersOfDay, setupPrayersOfMonth } from '../../store/actions/prayers'

const mapStateToProps = ({ theme, cities }) => {
  return {
    theme,
    cities: cities.cities
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setDarkTheme: (isDarkTheme) => dispatch(setDarkTheme(isDarkTheme)),
    fetchCities: query => dispatch(setupCities(query)),
    fetchPrayersOfDay: city => dispatch(setupPrayersOfDay(city)),
    fetchPrayersOfMonth: city => dispatch(setupPrayersOfMonth(city))
  }
}

const Header = ({ theme, setDarkTheme, cities, fetchCities, fetchPrayersOfDay, fetchPrayersOfMonth }) => {
  const handleTheme = (value) => {
    setDarkTheme(value)
  }

  const onSelectCity = cityName => {
    fetchPrayersOfDay(cityName)
    fetchPrayersOfMonth(cityName)
  }

  const handleInput = async query => {
    await fetchCities(query)
  }

  return (
    <header className='header'>
      <div className='header__container container'>
        <Logo />
        <SearchInput
          placeholder='Введите город'
          onChange={handleInput}
          onSelect={onSelectCity}
          options={cities}
          optionsValueKey='name'
        />
        <div className='header__info'>
          <Switch checked={theme.isDarkTheme} onChange={(value) => handleTheme(value)} />
          <LiveTime />
        </div>
      </div>
    </header>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
