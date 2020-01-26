
const initialState = {
  cities: []
}

export const cities = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CITIES': return {
      ...state,
      cities: action.cities
    }
    default: return state
  }
}
