import React from 'react'

import './style.css'

export default ({ className, size = 44, color = '#8056DE' }) => {
  return (
    <div id='escapingBallG' className={className}>
      <div id='escapingBall_1' className='escapingBallG' style={{ height: size + 'px', width: size + 'px', backgroundColor: color }} />
    </div>
  )
}
