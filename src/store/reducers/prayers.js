import { SET_PRAYERS_OF_DAY, SET_PRAYERS_OF_MONTH } from '../types'

const initialState = {
  prayersOfDay: [],
  prayersOfMonth: []
}

export const prayers = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRAYERS_OF_DAY:
      return {
        ...state,
        prayersOfDay: action.prayersOfDay
      }
    case SET_PRAYERS_OF_MONTH:
      return {
        ...state,
        prayersOfMonth: action.prayersOfMonth
      }
    default:
      return state
  }
}
