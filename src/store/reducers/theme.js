
const initialState = {
  theme: false
}

export const darkTheme = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DARK_THEME': return {
      ...state,
      theme: action.theme
    }
    default: return state
  }
}
