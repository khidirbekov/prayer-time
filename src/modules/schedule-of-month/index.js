import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { isExist } from '../../helpers/general'
import { setupPrayersOfMonth } from '../../store/actions/prayers'
import Preloader from '../../components/preloader'
import Box from '../../components/box'
import Table from '../../components/prayer-table'

const mapStateToProps = ({ loading, prayers, cities }) => {
  return {
    loading,
    prayersOfMonth: prayers.prayersOfMonth,
    city: cities.defaultCity
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPrayersOfMonth: () => dispatch(setupPrayersOfMonth())
  }
}

const PrayerCards = ({
  loading,
  prayersOfMonth,
  city,
  fetchPrayersOfMonth
}) => {
  const isLoaded = loading.isLoadedPrayersOfMonth

  useEffect(() => {
    fetchPrayersOfMonth()
  }, [fetchPrayersOfMonth])

  const showPrayersItems = () => {
    if (isExist(prayersOfMonth)) {
      return prayersOfMonth.map(pray => {
        return (
          <tr key={pray.date.readable}>
            <td>{pray.date.readable}</td>
            <td>{pray.timings.Fajr}</td>
            <td>{pray.timings.Sunrise}</td>
            <td>{pray.timings.Dhuhr}</td>
            <td>{pray.timings.Asr}</td>
            <td>{pray.timings.Maghrib}</td>
            <td>{pray.timings.Isha}</td>
          </tr>
        )
      })
    }
    return null
  }

  return (
    <Box
      title="Расписание на месяц"
      content={
        isLoaded ? (
          <div className="schedule-of-month__block">
            <Table prayers={showPrayersItems()} />{' '}
          </div>
        ) : (
          <Preloader />
        )
      }
      description={city}
    />
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(PrayerCards)
