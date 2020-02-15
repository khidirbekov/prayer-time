import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'

import { BrowserRouter as Router } from 'react-router-dom'

import { Provider } from 'react-redux'
import configureStore from './store'

import './style.css'

const store = configureStore()

require('dotenv').config()

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
)

serviceWorker.register()
