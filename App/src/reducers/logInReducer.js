import * as types from '../constants/ActionTypes';

const initialState = {
  user: []
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN:
      return Object.assign({}, state, {
        logginIn: action.loggingIn,
        user: action.user,
        error: action.error
      })
    default:
      return state;
    }
};
