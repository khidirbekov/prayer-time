import React, { useState, useEffect } from 'react'

import dayjs from 'dayjs'

import Header from './view'

const Data = ({ changeColorTheme, themeStatus }) => {
  const [time, setTime] = useState(dayjs().format('HH:mm:ss'))

  useEffect(() => {
    setInterval(() => {
      setTime(dayjs().format('HH:mm:ss'))
    }, 1000)
  }, [time])

  return (<Header themeStatus={themeStatus} changeColorTheme={changeColorTheme} time={time} />)
}

export default Data
