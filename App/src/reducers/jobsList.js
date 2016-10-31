import * as types from '../constants/ActionTypes';

const initialState = {
  jobsList: {}
};

export default function jobs(state = initialState, action) {
  switch (action.type) {
    case types.ADD_JOBS:
      return Object.assign({}, state, {
        grabbing: action.grabbing,
        listings: action.list
      })
    default:
      return state;
    }
};
