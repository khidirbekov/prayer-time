import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'

import { Provider } from 'react-redux'
import configureStore from './store'

import './style.css'

const store = configureStore()

require('dotenv').config()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'))

serviceWorker.register()
