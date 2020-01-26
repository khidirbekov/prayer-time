import React from 'react'
import './style.css'

import { Switch } from 'antd'

import SearchInput from '../search-input'

import { getCitiesList } from '../../store/actions/cities'

const Header = ({ changeColorTheme, time, themeStatus }) => {
  return (
    <header className='header'>
      <div className='header--logo'>
        PrayTime
      </div>
      <SearchInput searchFunction={getCitiesList} />
      <div className='header__info'>
        <Switch defaultChecked={false} checked={themeStatus} onChange={(checked) => changeColorTheme(checked)} />
        {time}
      </div>
    </header>
  )
}

export default Header
