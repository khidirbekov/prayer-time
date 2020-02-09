import axios from 'axios'
import { setLoadingStatusPrayersOfDay, setLoadingStatusPrayersOfMonth } from './loading'
import separatePrayers from '../../helpers/separatePrayers'

import { SET_PRAYERS_OF_DAY, SET_PRAYERS_OF_MONTH } from '../types'
import { FIXED_ISHA_ANGLE_INTERVAL } from '../../configs/prayer-methods'

export const setPrayersOfDay = prayersOfDay => {
  return {
    type: SET_PRAYERS_OF_DAY,
    prayersOfDay
  }
}

export const setupPrayersOfDay = address => {
  return async (dispatch, getState) => {
    await dispatch(setLoadingStatusPrayersOfDay(false))
    const data = await getPrayersOfDay(address || getState().cities.defaultCity)
    const prayers = separatePrayers(data)
    dispatch(setPrayersOfDay(prayers))
    dispatch(setLoadingStatusPrayersOfDay(true))
  }
}

const getPrayersOfDay = async address => {
  const { data } = await axios.get(`${process.env.REACT_APP_HOST}/timingsByAddress`, {
    params: {
      address,
      method: FIXED_ISHA_ANGLE_INTERVAL
    }
  })

  return data
}

export const setPrayersOfMonth = prayersOfMonth => {
  return {
    type: SET_PRAYERS_OF_MONTH,
    prayersOfMonth
  }
}

export const setupPrayersOfMonth = (address) => {
  return async (dispatch, getState) => {
    await dispatch(setLoadingStatusPrayersOfMonth(false))
    const { data } = await getPrayersOfMonth(address || getState().cities.defaultCity)
    dispatch(setPrayersOfMonth(data))
    await dispatch(setLoadingStatusPrayersOfMonth(true))
  }
}

const getPrayersOfMonth = async address => {
  const { data } = await axios.get(`${process.env.REACT_APP_HOST}/calendarByAddress`, {
    params: {
      address,
      method: FIXED_ISHA_ANGLE_INTERVAL
    }
  })

  return data
}
