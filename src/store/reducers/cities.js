import { SET_DEFAULT_CITY, SET_CITIES } from '../types'
import { getDefaultCity } from '../../helpers/general'

const initialState = {
  cities: [],
  defaultCity: getDefaultCity()
}

export const cities = (state = initialState, action) => {
  switch (action.type) {
    case SET_CITIES:
      return {
        ...state,
        cities: action.cities
      }
    case SET_DEFAULT_CITY:
      return {
        ...state,
        defaultCity: action.defaultCity
      }
    default:
      return state
  }
}
