
const initialState = {
  prayers: []
}

export const prayersOfDay = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRAYERS': return {
      ...state,
      prayers: action.prayers
    }
    default: return state
  }
}
