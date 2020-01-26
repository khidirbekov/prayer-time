import { combineReducers } from 'redux'
import { prayersOfDay } from './prayers'
import { darkTheme } from './theme'
import { cities } from './cities'

export default combineReducers({
  prayersOfDay,
  darkTheme,
  cities
})
