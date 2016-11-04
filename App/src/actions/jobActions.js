import * as types from '../constants/ActionTypes';
import { API_URL } from '../constants/API';
import axios from 'axios';

export function fetchJobs(numberOfRequests){
  return (dispatch, getState) => {
    // Grabbing Jobs
    dispatch(grabbedJobs());
    return axios({
      url: API_URL + '/jobs',
      method: 'get',
      params: {
        number: numberOfRequests // Number Limit Query
      }
    }).then(resp => {
      // Grab Success
      dispatch(fetchedJobs(resp));
    }).catch(err => {
      // Grab Error
      console.log(err);
    });
  }
}
export function addJob(data){
  console.log(data);
  return(dispatch, getState) => {
    // Dispatch Posting Job
    return axios({
      url: API_URL + '/jobs',
      method: 'post',
      data: {
        activityName: data.activityName,
        excerpt: data.excerpt,
        description: data.description,
        location: data.location,
        locationCountry: data.locationCountry,
        locationLng: data.locationLng,
        locationLat: data.locationLat,
        tags: data.tags,
        photo: data.photo
      }
    }).then(resp => {
      // Post Success
      console.log(resp);
    }).catch(err => {
      // Post Error
    })
  }
}

export function fetchedJobs(resp) {
  return {
    type: types.FETCH_JOBS,
    list: resp.data,
    grabbing: false,
    error: false,
  }
}
export function grabbedJobs(resp) {
  return {
    type: types.GRABBING_JOBS,
    grabbing: true,
  }
}
export function addedJob(resp){
  return {
    type: types.ADD_JOB,
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
