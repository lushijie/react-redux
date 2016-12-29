import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from 'reducers/counter';
import {bindActionCreators} from 'redux';
import './index.css';

class Counter extends Component {
  render() {
    const {states, actions, props} = this.props;
    return (
      <div>
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
      state
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
  // console.log(stateProps);
  // console.log(dispatchProps);
  // console.log(ownProps);
  return (
    {
      props: ownProps,
      states: stateProps,
      actions: dispatchProps
    }
  )
}

export default connect(mapStateToProps, mapDispathToProps, mergeProps)(Counter)
