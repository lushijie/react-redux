import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import Counter from 'components/counter';
import {counterReducer} from 'reducers/counter';


const store = createStore(counterReducer, 10);
ReactDOM.render(
  <Provider store={store}>
    <div>
        <Counter custom={"This is ownProps!"} />
    </div>
  </Provider>,
  document.getElementById('app')
);
