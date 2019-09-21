import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Cards from './index.js'

const Data = () => {
  const [fajr, setFajr] = useState('')
  const getPrayersTime = async () => {
    const { data } = await axios.get('https://muslimsalat.p.rapidapi.com/rostov-on-don/daily/22-09-2019/1.json', {
      headers: {
        'X-RapidAPI-Key': '3a95356d7dmsh9f47b0a93a3951cp11754ejsnc6b7b643fd07'
      }
    })
    setFajr(data.items[0].fajr)
  }

  useEffect(() => {
    getPrayersTime()
  }, [])

  return (
    <Cards fajr={fajr} />
  )
}

export default Data
