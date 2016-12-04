import * as types from '../constants/ActionTypes';
import { API_URL } from '../constants/API';
import axios from 'axios';
import _ from 'lodash';

export function logInWithFacebook(resp){
  return (dispatch, getState) => {
    dispatch(loggingIn());
    return axios({
      url: API_URL + '/login/facebook',
      method: 'post',
      data: resp
    }).then(response => {
      if (response.data.status === 'returning') {
        dispatch(logInSuccess(resp));
      } else if (response.data.status === 'accepted new') {
        dispatch(logInSuccess(resp));
      }
    }).catch(err => {
      dispatch(LogInFailed());
    });
  }
}

export function loggingIn(resp){
  return {
    type: types.LOGIN,
    loggingIn: true,
    error: false,
    user: [],
  }
}
export function logInSuccess(resp) {
  return {
    type: types.LOGIN,
    user: resp,
    loggingIn: false,
    error: false,
  }
}
export function LogInFailed(resp) {
  return {
    type: types.LOGIN,
    loggingIn: false,
    error: true,
    user: []
  }
}
