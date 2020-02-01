import React, { createRef, useEffect } from 'react'

import './style.css'

export default ({ checked, onChange }) => {
  const switchRef = createRef()

  const setDefaultValue = checked => {
    switchRef.current.checked = checked
  }

  // eslint-disable-next-line
  useEffect(() => setDefaultValue(checked), [])

  return (
    <>
      <input
        className='switch__checkbox'
        type='checkbox'
        id='checkbox'
        ref={switchRef}
        onChange={(event) => onChange(event.target.checked)}
      />
      <label className='switch__trigger' htmlFor='checkbox' />
    </>
  )
}
