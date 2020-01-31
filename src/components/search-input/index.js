import React, { useState } from 'react'

import './style.css'

import { Icon } from 'antd'

import { connect } from 'react-redux'
import { setupCities } from '../../store/actions/cities'
import { setupPrayersOfDay } from '../../store/actions/prayers'

import SearchImg from '../../assets/images/search.svg'

const mapStateToProps = ({ cities }) => {
  return {
    cities
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCities: query => dispatch(setupCities(query)),
    fetchPrayers: city => dispatch(setupPrayersOfDay(city))
  }
}

const SearchInput = React.memo(({ cities, fetchCities, fetchPrayers }) => {
  const [optionsStatus, setOptionsStatus] = useState(false)
  const [loading, setLoading] = useState(false)

  const textInput = React.createRef()

  const setValue = cityName => {
    textInput.current.value = cityName
    setOptionsStatus(false)
    fetchPrayers(cityName)
  }

  const handleInput = async event => {
    const query = event.target.value
    setLoading(true)
    await fetchCities(query)
    setLoading(false)
  }

  const showResults = () => {
    if (cities && cities.cities && cities.cities.length) {
      return cities.cities.map(city => {
        return (
          <li key={city.name} onClick={() => setValue(city.name)} className='search__result'>
            {city.name}
          </li>
        )
      })
    }
    return null
  }

  return (
    <div className='search'>
      <div className='search__content'>
        <input
          ref={textInput}
          placeholder='Введите город'
          onFocus={() => setOptionsStatus(true)}
          onBlur={() => setTimeout(() => setOptionsStatus(false), 300)}
          type='text'
          className='search__input'
          onChange={event => handleInput(event)}
        />
        <label className='search__label'>
          <img src={SearchImg} alt='search' />
        </label>
      </div>
      {loading && <Icon type='loading' className='search__loading' />}
      {optionsStatus && (
        <div className='search__result__wrapper'>
          {showResults()}
        </div>)}
    </div>
  )
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput)
