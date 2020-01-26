import axios from 'axios'

import dayjs from 'dayjs'

import { setDarkTheme } from './theme'
import separatePrayers from '../../helpers/separatePrayers'

export const setPrayers = (prayers) => {
  return {
    type: 'SET_PRAYERS',
    prayers
  }
}

export const getPrayersOfDayByCity = (city = 'rostov-on-don') => {
  return async (dispatch) => {
    const { data } = await axios.get(`${process.env.REACT_APP_HOST}/timingsByCity`, {
      headers: {
        'x-rapidapi-host': process.env.REACT_APP_HOST,
        'x-rapidapi-key': process.env.REACT_APP_KEY
      },
      params: {
        city,
        country: 'russia',
        method: 6
      }
    })

    const prayers = separatePrayers(data)

    // if it's time of isha then dark theme on
    dispatch(setDarkTheme(dayjs().format('HH:mm') > prayers[4].time || dayjs().format('HH:mm') < prayers[0].time))

    dispatch(setPrayers(prayers))
  }
}

export const getPrayersOfDayByAddress = (address) => {
  return async (dispatch) => {
    const { data } = await axios.get(`${process.env.REACT_APP_HOST}/timingsByAddress`, {
      headers: {
        'x-rapidapi-host': process.env.REACT_APP_HOST,
        'x-rapidapi-key': process.env.REACT_APP_KEY
      },
      params: {
        address
      }
    })

    const prayers = separatePrayers(data)

    dispatch(setPrayers(prayers))
  }
}
