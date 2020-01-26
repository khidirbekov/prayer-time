import React, { useEffect } from 'react'
import Cards from './view.js'

import { connect } from 'react-redux'
import { getPrayersOfDayByCity } from '../../store/actions/prayers'

const mapStateToProps = ({ prayersOfDay }) => {
  return {
    prayersOfDay
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPrayersOfDay: () => dispatch(getPrayersOfDayByCity())
  }
}

const Data = ({ prayersOfDay, fetchPrayersOfDay }) => {
  useEffect(() => {
    fetchPrayersOfDay()
  }, [fetchPrayersOfDay])

  return (
    <Cards prayers={prayersOfDay.prayers} />
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Data)
