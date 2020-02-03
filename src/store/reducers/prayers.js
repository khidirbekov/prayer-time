import { SET_PRAYERS_OF_DAY, SET_PRAYERS_OF_MONTH, SET_ADDRESS } from '../types'

const initialState = {
  prayersOfDay: [],
  prayersOfMonth: [],
  address: 'Rostov-na-Donu, Russia'
}

export const prayers = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRAYERS_OF_DAY: return {
      ...state,
      prayersOfDay: action.prayersOfDay
    }
    case SET_PRAYERS_OF_MONTH: return {
      ...state,
      prayersOfMonth: action.prayersOfMonth
    }
    case SET_ADDRESS: return {
      ...state,
      address: action.address
    }
    default: return state
  }
}
