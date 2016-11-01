import * as types from '../constants/ActionTypes';
import { API_URL } from '../constants/API';
import axios from 'axios';

export function searchJobs(){
  return (dispatch, getState) => {
    dispatch(grabbingJobs());
    return axios({
      url: API_URL + '/jobs',
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
    type: types.GRABBING_JOBS,
    grabbing: true
  }
}
export function addJobs({list, error}) {
  return {
    type: types.ADD_JOBS,
    list,
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
