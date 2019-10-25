
const initialState = false

export const darkTheme = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DARK_THEME': return action.theme
    default: return state
  }
}
