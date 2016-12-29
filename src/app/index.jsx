import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {counterReducer} from 'reducers/counter';
import {rootRoute} from './router';
import {Router, browserHistory} from 'react-router';

const store = createStore(counterReducer, 10);
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={rootRoute} />
  </Provider>,
  document.getElementById('app')
);
