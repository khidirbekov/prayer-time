import React from 'react'
import ReactDOM from 'react-dom'
import Main from './pages'
import * as serviceWorker from './serviceWorker'

import 'antd/dist/antd.css'

import { Provider } from 'react-redux'
import configureStore from './store'

const store = configureStore()

require('dotenv').config()

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>, document.getElementById('root'))

serviceWorker.unregister()
