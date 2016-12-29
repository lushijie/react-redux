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


export function counterReducer(state = 0, action) {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return state + action.step
    case actionTypes.DECREMENT:
      return state - action.step
    default:
      return state
  }
}
