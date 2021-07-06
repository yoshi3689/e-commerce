import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux';

import App from './App'
import { store } from './redux'

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.querySelector('#root')
);