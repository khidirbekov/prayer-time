import axios from 'axios'

export const setCity = (cities) => {
  return {
    type: 'SET_CITIES',
    cities
  }
}

export const getCitiesList = (city) => {
  return async (dispatch) => {
    const { data } = await axios.get('https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php', {
      headers: {
        'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
        'x-rapidapi-key': '814bc639bbmsh7d24588fedde188p113d2djsne5d79a965d42'
      },
      params: {
        location: city
      }
    })

    dispatch(setCity(data.Results))
  }
}
