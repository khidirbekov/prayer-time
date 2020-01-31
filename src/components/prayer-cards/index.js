import React, { useEffect } from 'react'
import Cards from './view.js'

import { connect } from 'react-redux'
import { setupPrayersOfDay } from '../../store/actions/prayers'

const mapStateToProps = ({ loading, prayersOfDay }) => {
  return {
    loading,
    prayersOfDay
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPrayersOfDay: () => dispatch(setupPrayersOfDay())
  }
}

const Data = ({ loading, prayersOfDay, fetchPrayersOfDay }) => {
  const isLoading = loading.isLoadingPrayersOfDay

  useEffect(() => {
    fetchPrayersOfDay()
  }, [fetchPrayersOfDay])

  return (
    <Cards isLoading={isLoading} address={prayersOfDay.address} prayers={prayersOfDay.prayers} />
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Data)
