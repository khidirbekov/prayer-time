
const initialState = {
  prayers: [],
  address: 'Rostov-na-Donu, Russia'
}

export const prayersOfDay = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRAYERS': return {
      ...state,
      prayers: action.prayers
    }
    case 'SET_ADDRESS': return {
      ...state,
      address: action.address
    }
    default: return state
  }
}
