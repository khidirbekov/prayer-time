import fajrImg from '../assets/images/fajr.svg'
import dhuhrImg from '../assets/images/dhuhr.svg'
import asrImg from '../assets/images/asr.svg'
import maghribImg from '../assets/images/maghrib.svg'
import ishaImg from '../assets/images/isha.svg'

export default ({ data }) => {
  return [
    {
      name: 'Утренний',
      time: data.timings.Fajr,
      image: fajrImg
    },
    {
      name: 'Полуденный',
      time: data.timings.Dhuhr,
      image: dhuhrImg
    },
    {
      name: 'Послеполуденный',
      time: data.timings.Asr,
      image: asrImg
    },
    {
      name: 'Вечерний',
      time: data.timings.Maghrib,
      image: maghribImg
    },
    {
      name: 'Ночной',
      time: data.timings.Isha,
      image: ishaImg
    }
  ]
}
