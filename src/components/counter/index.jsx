import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from 'reducers/counter';
import {bindActionCreators} from 'redux';
import './index.css';

class Counter extends Component {
  render() {
    const {states, actions, props} = this.props
    console.log('render state', states)
    return (
      <div>
        <h3>{states && (states.type + ':' + states.num)}</h3>
        <div>
          <button className="btn" onClick={() => {
              actions.incActionCreator(3);
            }}
          >+</button>

          <button className="btn" onClick={() => {
              actions.decActionCreator(2);
            }}
          >-</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return (
    {
      ...state.counterState
    }
  );
}

const mapDispathToProps = (dispatch) => {
  return (
    {
      ...bindActionCreators(actionCreators , dispatch)
    }
  );
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return (
    {
      props: ownProps,
      states: stateProps,
      actions: dispatchProps
    }
  )
}

export default connect(mapStateToProps, mapDispathToProps, mergeProps)(Counter)
