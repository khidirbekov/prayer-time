import axios from 'axios'

export const setCities = (cities) => {
  return {
    type: 'SET_CITIES',
    cities
  }
}

export const setupCities = (query) => {
  return async (dispatch) => {
    const cities = await getCities(query)
    dispatch(setCities(cities))
  }
}

const getCities = async (query) => {
  const { data } = await axios.get('https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php', {
    headers: {
      'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
      'x-rapidapi-key': '814bc639bbmsh7d24588fedde188p113d2djsne5d79a965d42'
    },
    params: {
      location: query
    }
  })

  return data.Results
}
