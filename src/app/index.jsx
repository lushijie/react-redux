import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import {counterReducer} from 'reducers'
import {rootRoute} from './router'
import {Router, browserHistory} from 'react-router'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'

// const reducers = combineReducers({
//   counterState: counterReducer,
// })
// const store = createStore(reducers);
// ReactDOM.render(
//   <Provider store={store}>
//     <Router history={browserHistory} routes={rootRoute} />
//   </Provider>,
//   document.getElementById('app')
// );

const reducers = combineReducers({
  counterState: counterReducer,
  routing: routerReducer
});
const store = createStore(reducers);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={rootRoute} />
  </Provider>,
  document.getElementById('app')
);
