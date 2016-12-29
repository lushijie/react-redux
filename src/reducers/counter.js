//actionTypes
export const counterActionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
}

//actionCreators
export const counterActionCreators = {
  incActionCreator: function(step) {
    return {
      type: counterActionTypes.INCREMENT,
      step
    }
  },
  decActionCreator: function(step) {
    return {
      type: counterActionTypes.DECREMENT,
      step
    }
  }
}

//reducers
export function counterReducer(state = 0, action) {
  switch (action.type) {
    case counterActionTypes.INCREMENT:
      return state + action.step
    case counterActionTypes.DECREMENT:
      return state - action.step
    default:
      return state
  }
}
