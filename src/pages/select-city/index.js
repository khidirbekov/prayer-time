import React from 'react'
import SelectCityBox from '../../modules/select-city-box'
import Logo from '../../components/logo'
import './style.css'

export default () => {
  return (
    <div className="container select-city-box">
      <Logo />
      <SelectCityBox />
    </div>
  )
}
