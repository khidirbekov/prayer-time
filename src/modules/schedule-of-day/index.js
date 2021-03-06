import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { isExist } from '../../helpers/general'
import { setupPrayersOfDay } from '../../store/actions/prayers'
import Preloader from '../../components/preloader'
import Box from '../../components/box'
import Card from '../../components/prayer-card'

const mapStateToProps = ({ loading, prayers, cities }) => {
  return {
    loading,
    prayersOfDay: prayers.prayersOfDay,
    city: cities.defaultCity
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPrayersOfDay: () => dispatch(setupPrayersOfDay())
  }
}

const PrayerCards = ({ loading, prayersOfDay, city, fetchPrayersOfDay }) => {
  const isLoaded = loading.isLoadedPrayersOfDay

  useEffect(() => {
    fetchPrayersOfDay()
  }, [fetchPrayersOfDay])

  const showPrayersCards = () => {
    if (isExist(prayersOfDay) && isLoaded) {
      return prayersOfDay.map((pray, index) => {
        return (
          <Card
            key={index}
            name={pray.name}
            time={pray.time}
            image={pray.image}
          />
        )
      })
    }
    return <Preloader />
  }

  return (
    <Box
      title="Расписание на сегодня"
      content={
        <div className="schedule-of-day__block">{showPrayersCards()}</div>
      }
      description={city}
    />
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(PrayerCards)
