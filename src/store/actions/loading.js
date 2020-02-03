import { SET_LOADING_STATUS_OF_DAY, SET_LOADING_STATUS_OF_MONTH } from '../types'

export const setLoadingStatusPrayersOfDay = loadingStatus => {
  return {
    type: SET_LOADING_STATUS_OF_DAY,
    isLoadedPrayersOfDay: loadingStatus
  }
}

export const setLoadingStatusPrayersOfMonth = loadingStatus => {
  return {
    type: SET_LOADING_STATUS_OF_MONTH,
    isLoadedPrayersOfMonth: loadingStatus
  }
}
