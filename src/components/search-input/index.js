import React, { useState } from 'react'

import './style.css'

import { connect } from 'react-redux'
import { setupCities } from '../../store/actions/cities'
import { setupPrayersOfDay, setupPrayersOfMonth } from '../../store/actions/prayers'

import SearchImg from '../../assets/images/search.svg'
import { isExist } from '../../helpers/general'
import Preloader from '../preloader'

const mapStateToProps = ({ cities }) => {
  return {
    cities: cities.cities
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCities: query => dispatch(setupCities(query)),
    fetchPrayersOfDay: city => dispatch(setupPrayersOfDay(city)),
    fetchPrayersOfMonth: city => dispatch(setupPrayersOfMonth(city))
  }
}

const SearchInput = React.memo(({ cities, fetchCities, fetchPrayersOfDay, fetchPrayersOfMonth }) => {
  const [isLoadedOptions, setIsLoadedOptions] = useState(false)
  const [loading, setLoading] = useState(false)

  const textInput = React.createRef()

  const setValue = cityName => {
    textInput.current.value = cityName
    setIsLoadedOptions(false)
    fetchPrayersOfDay(cityName)
    fetchPrayersOfMonth(cityName)
  }

  const handleInput = async event => {
    const query = event.target.value
    setLoading(true)
    await fetchCities(query)
    setLoading(false)
  }

  const showResults = () => {
    if (isExist(cities)) {
      return cities.map(city => {
        return (
          <li key={city.name} onClick={() => setValue(city.name)} className='search__result'>
            {city.name}
          </li>
        )
      })
    }
    return null
  }

  const closeOptionsAfterSelectOrBlur = () => {
    setTimeout(() => setIsLoadedOptions(false), 300)
  }

  return (
    <div className='search'>
      <div className='search__content'>
        <input
          ref={textInput}
          placeholder='Введите город'
          onFocus={() => setIsLoadedOptions(true)}
          onBlur={() => closeOptionsAfterSelectOrBlur()}
          type='text'
          className='search__input'
          onChange={event => handleInput(event)}
        />
        <label className='search__label'>
          <img src={SearchImg} alt='search' />
        </label>
      </div>
      {loading && <Preloader className='search__loading' size={15} />}
      {isLoadedOptions && (
        <div className='search__result__wrapper'>
          {showResults()}
        </div>)}
    </div>
  )
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput)
