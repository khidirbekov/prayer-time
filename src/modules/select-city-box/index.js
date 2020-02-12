import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Box from '../../components/box'
import SearchInput from '../../components/search-input'
import { setupCities, setDefaultCity } from '../../store/actions/cities'

const mapStateToProps = ({ theme, cities }) => {
  return {
    theme,
    cities: cities.cities
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCities: query => dispatch(setupCities(query)),
    setDefaultCity: city => dispatch(setDefaultCity(city))
  }
}

const SelectCity = ({ cities, fetchCities, setDefaultCity }) => {
  const history = useHistory()

  const onSelectCity = cityName => {
    setDefaultCity(cityName)
    history.push('/index')
  }

  const handleInput = async query => {
    await fetchCities(query)
  }

  return (
    <Box
      title="Выберите город"
      content={
        <SearchInput
          placeholder="Введите город"
          onChange={handleInput}
          onSelect={onSelectCity}
          options={cities}
          optionsValueKey="name"
        />
      }
      description="Введите название города, пока что нужно вводить на английском"
    />
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectCity)
