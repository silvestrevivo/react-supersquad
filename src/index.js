import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import '../assets/sass/style.scss'

import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'

import rootReducer from './reducers'

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : (f) => (f)
)

const store = createStore(rootReducer, enhancers)
// console.log('store.getState()', store.getState());
// if you want to acces to the general data => action by default return state

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
