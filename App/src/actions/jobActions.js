import * as types from '../constants/ActionTypes';
import { API_URL } from '../constants/API';
import axios from 'axios';

export function searchJobs(){
  return (dispatch, getState) => {
    dispatch(grabbingJobs());
    return axios({
      url: API_URL,
      method: 'get',
    }).then(resp => {
      dispatch(addJobs({list: resp.data, error: false}));
    }).catch(err =>{
      console.log(err);
    });
  }
}
export function grabbingJobs(){
  return {
    type: types.ADD_JOBS,
    grabbing: true
  }
}
export function addJobs({spotify, error}) {
  return {
    type: types.ADD_JOBS,
    spotify,
    grabbing: false,
  }
}
export function deleteJobs(id) {
  return {
    type: types.DELETE_JOBS,
    id
  }
}
export function starJobs(id) {
  return {
    type: types.STAR_JOBS,
    id
  }
}
