import axios from 'axios'

import dayjs from 'dayjs'

import { setDarkTheme } from './theme'

import fajrImg from '../../assets/images/fajr.jpg'
import dhuhrImg from '../../assets/images/dhuhr.jpg'
import asrImg from '../../assets/images/asr.jpg'
import maghribImg from '../../assets/images/maghrib.jpg'
import ishaImg from '../../assets/images/isha.jpg'

export const setPrayersOfDay = (prayers) => {
  return {
    type: 'SET_PRAYERS_OF_DAY',
    prayers
  }
}

export const getPrayersOfDay = (id) => {
  return async (dispatch) => {
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
        name: 'Фаджр',
        time: data.data.timings.Fajr,
        image: fajrImg
      },
      {
        name: 'Зухр',
        time: data.data.timings.Dhuhr,
        image: dhuhrImg
      },
      {
        name: 'Аср',
        time: data.data.timings.Asr,
        image: asrImg
      },
      {
        name: 'Магриб',
        time: data.data.timings.Maghrib,
        image: maghribImg
      },
      {
        name: 'Иша',
        time: data.data.timings.Isha,
        image: ishaImg
      }
    ]

    // if it's time of isha then dark theme on
    dispatch(setDarkTheme(dayjs().format('HH:mm') > prayers[4].time || dayjs().format('HH:mm') < prayers[0].time))

    dispatch(setPrayersOfDay(prayers))
  }
}
