import React, { useEffect } from 'react'
import './style.css'

import { isExist } from '../../helpers/general'

import { connect } from 'react-redux'
import { setupPrayersOfDay } from '../../store/actions/prayers'

import Preloader from '../../components/preloader'
import Box from '../../components/box'
import Card from '../../components/prayer-card'

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

const PrayerCards = ({ loading, prayersOfDay, fetchPrayersOfDay }) => {
  const { address, prayers } = prayersOfDay
  const isLoaded = loading.isLoadingPrayersOfDay

  useEffect(() => {
    fetchPrayersOfDay()
  }, [fetchPrayersOfDay])

  const showPrayersCards = () => {
    if (isExist(prayers) && !isLoaded) {
      return prayers.map((pray, index) => {
        return <Card key={index} name={pray.name} time={pray.time} image={pray.image} />
      })
    }
    return <Preloader />
  }

  return (
    <Box
      title='Расписание на сегодня'
      content={
        <>
          {showPrayersCards()}
        </>
      }
      description={address}
    />
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(PrayerCards)
