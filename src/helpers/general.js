export const isExist = data => {
  if (typeof data === 'object') {
    if (isArray(data)) {
      return Boolean(data.length)
    }
    return Boolean(data)
  }

  return Boolean(data)
}

const isArray = data => {
  return data && Boolean(data.length)
}

export const getDefaultCity = () => {
  const defaultCity = window.localStorage.getItem('city')
  return isExist(defaultCity) ? defaultCity : null
}
