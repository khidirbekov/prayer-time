const SET_LOADING_OF_DAY = 'SET_LOADING_OF_DAY'

export const setLoadingStatusPrayersOfDay = (loadingStatus) => {
  return {
    type: SET_LOADING_OF_DAY,
    isLoadingPrayersOfDay: loadingStatus
  }
}
