import Clone from 'clone';

const actionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
}

export const actionCreators = {
  incActionCreator: (step) => {
    return {
      type: actionTypes.INCREMENT,
      step
    }
  },

  decActionCreator: (step) => {
    return {
      type: actionTypes.DECREMENT,
      step
    }
  }
}

const defaultState = {
  type: 'XXX',
  num: 0
};

export function counterReducer(state = defaultState, action) {
  let stateClone = Clone(state);

  switch (action.type) {
    case actionTypes.INCREMENT:
      stateClone.type = 'INC';
      stateClone.num = stateClone.num + action.step;
      return stateClone;
    case actionTypes.DECREMENT:
      stateClone.type = 'DEC';
      stateClone.num = stateClone.num - action.step;
      return stateClone;
    default:
      return stateClone;
  }
}
