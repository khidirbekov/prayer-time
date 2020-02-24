import {
  SET_LOADING_STATUS_OF_DAY,
  SET_LOADING_STATUS_OF_MONTH
} from '../types'

const initialState = {
  isLoadedPrayersOfDay: false,
  isLoadedPrayersOfMonth: false
}

export const loading = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING_STATUS_OF_DAY:
      return {
        ...state,
        isLoadedPrayersOfDay: action.isLoadedPrayersOfDay
      }
    case SET_LOADING_STATUS_OF_MONTH:
      return {
        ...state,
        isLoadedPrayersOfMonth: action.isLoadedPrayersOfMonth
      }
    default:
      return state
  }
}
