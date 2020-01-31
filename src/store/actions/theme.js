export const setDarkTheme = themeFlag => {
  return {
    type: 'SET_DARK_THEME',
    isDark: themeFlag
  }
}
