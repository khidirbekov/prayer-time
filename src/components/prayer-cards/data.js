import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Cards from './index.js'

import fajrImg from '../../assets/images/fajr.jpg'
import dhuhrImg from '../../assets/images/dhuhr.jpg'
import asrImg from '../../assets/images/asr.jpg'
import maghribImg from '../../assets/images/maghrib.jpg'
import ishaImg from '../../assets/images/isha.jpg'

const Data = () => {
  const [prayers, setPrayers] = useState({})
  const getPrayersTime = async () => {
    const { data } = await axios.get('https://aladhan.p.rapidapi.com/timingsByCity', {
      headers: {
        'x-rapidapi-host': 'aladhan.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_KEY
      },
      params: {
        city: 'rostov-on-don',
        country: 'russia'
      }
    })
    const prayers = [
      {
        name: 'Fajr',
        time: data.data.timings.Fajr,
        image: fajrImg
      },
      {
        name: 'Dhuhr',
        time: data.data.timings.Dhuhr,
        image: dhuhrImg
      },
      {
        name: '\'Asr',
        time: data.data.timings.Asr,
        image: asrImg
      },
      {
        name: 'Maghrib',
        time: data.data.timings.Maghrib,
        image: maghribImg
      },
      {
        name: 'Isha',
        time: data.data.timings.Isha,
        image: ishaImg
      }
    ]

    setPrayers(prayers)
  }

  useEffect(() => {
    getPrayersTime()
  }, [])

  return (
    <Cards prayers={prayers} />
  )
}

export default Data
