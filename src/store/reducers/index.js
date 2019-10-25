import { combineReducers } from 'redux'
import { prayersOfDay } from './prayers'
import { darkTheme } from './theme'

export default combineReducers({
  prayersOfDay,
  darkTheme
})
