import * as types from '../constants/ActionTypes';

const initialState = {
  listings: []
};

export default function jobs(state = initialState, action) {
  switch (action.type) {
    case types.ADD_JOBS:
      return Object.assign({}, state, {
        grabbing: action.grabbing,
        listings: action.list
      })
    case types.GRABBING_JOBS:
      return Object.assign({}, state, {
        grabbing: action.grabbing,
      })
    default:
      return state;
    }
};
