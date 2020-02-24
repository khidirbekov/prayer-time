import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import './style.css'

export default () => {
  const [time, setTime] = useState(dayjs().format('HH:mm:ss'))

  useEffect(() => {
    setInterval(() => {
      setTime(dayjs().format('HH:mm:ss'))
    }, 1000)
  }, [time])

  return <div className="time">{time}</div>
}
