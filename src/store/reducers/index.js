import { combineReducers } from 'redux'

import { cities } from './cities'
import { theme } from './theme'
import { loading } from './loading'
import { prayersOfDay } from './prayers'

export default combineReducers({
  cities,
  theme,
  loading,
  prayersOfDay
})
