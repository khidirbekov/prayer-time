const initialState = {
  isLoadingPrayersOfDay: false
}

export const loading = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOADING_OF_DAY': return {
      ...state,
      isLoadingPrayersOfDay: action.isLoadingPrayersOfDay
    }
    default: return state
  }
}
