import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import {counterReducer} from 'reducers/counter'
import {rootRoute} from './router'
import {Router, browserHistory} from 'react-router'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'

// const store = createStore(counterReducer, 10);
// console.log(store.getState())

// ReactDOM.render(
//   <Provider store={store}>
//     <Router history={browserHistory} routes={rootRoute} />
//   </Provider>,
//   document.getElementById('app')
// );



const reducers = combineReducers({
  ...counterReducer,
  routing: routerReducer
})

const store = createStore(reducers, {initialState: 10})
const history = syncHistoryWithStore(browserHistory, store)

console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={rootRoute} />
  </Provider>,
  document.getElementById('app')
);
