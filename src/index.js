import React from 'react'
import ReactDOM from 'react-dom'
import Main from './pages'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<Main />, document.getElementById('root'))

serviceWorker.unregister()
