import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators, createStore } from 'redux';
import Counter from './counter';
import { counterActionTypes, counterActionCreators, counterReducer } from 'reducers/counter';


const store = createStore(counterReducer, 8);

function render() {
  ReactDOM.render(
    <Counter
        value={store.getState()}
        onIncrement={() => store.dispatch(counterActionCreators.incActionCreator(3))}
        onDecrement={() => store.dispatch(counterActionCreators.decActionCreator(2))}
    />,
    document.getElementById('app')
  )
}

//组件渲染
store.subscribe(render);
render();

