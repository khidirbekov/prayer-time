import axios from 'axios'
import { setLoadingStatusPrayersOfDay } from './loading'
import separatePrayers from '../../helpers/separatePrayers'

export const setPrayers = (prayers) => {
  return {
    type: 'SET_PRAYERS',
    prayers
  }
}

export const setAddress = (address) => {
  return {
    type: 'SET_ADDRESS',
    address
  }
}

export const setupPrayersOfDay = (address = 'Rostov-na-Donu, Russia') => {
  return async (dispatch) => {
    dispatch(setAddress(address))
    await dispatch(setLoadingStatusPrayersOfDay(true))
    const data = await getPrayersOfDay(address)
    const prayers = separatePrayers(data)
    dispatch(setPrayers(prayers))
    dispatch(setLoadingStatusPrayersOfDay(false))
  }
}

const getPrayersOfDay = async (address) => {
  const FIXED_ISHA_ANGLE_INTERVAL = 8
  const { data } = await axios.get(`${process.env.REACT_APP_HOST}/timingsByAddress`, {
    params: {
      address,
      method: FIXED_ISHA_ANGLE_INTERVAL
    }
  })

  return data
}
