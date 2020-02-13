const initialState = {
  isDark: false
}

export const theme = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DARK_THEME':
      return {
        ...state,
        isDark: action.isDark
      }
    default:
      return state
  }
}
