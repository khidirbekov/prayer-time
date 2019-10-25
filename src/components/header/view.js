import React from 'react'
import './style.css'

import { Switch } from 'antd'

const Header = ({ changeColorTheme, time, themeStatus }) => {
  return (
    <header className='header'>
      <div className='header--logo'>
        PrayTime
      </div>
      <div className='header__info'>
        <Switch defaultChecked={themeStatus} onChange={(checked) => changeColorTheme(checked)} />
        {time}
      </div>
    </header>
  )
}

export default Header
