
const initialState = []

export const prayersOfDay = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRAYERS_OF_DAY': return action.prayers
    default: return state
  }
}
