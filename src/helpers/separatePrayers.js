import fajrImg from '../assets/images/fajr.jpg'
import dhuhrImg from '../assets/images/dhuhr.jpg'
import asrImg from '../assets/images/asr.jpg'
import maghribImg from '../assets/images/maghrib.jpg'
import ishaImg from '../assets/images/isha.jpg'

export default data => {
  return [
    {
      name: 'Фаджр',
      time: data.data.timings.Fajr,
      image: fajrImg
    },
    {
      name: 'Зухр',
      time: data.data.timings.Dhuhr,
      image: dhuhrImg
    },
    {
      name: 'Аср',
      time: data.data.timings.Asr,
      image: asrImg
    },
    {
      name: 'Магриб',
      time: data.data.timings.Maghrib,
      image: maghribImg
    },
    {
      name: 'Иша',
      time: data.data.timings.Isha,
      image: ishaImg
    }
  ]
}
