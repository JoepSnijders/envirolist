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
      console.log(resp);
      dispatch(fetchJobsSuccess(resp));
    }).catch(err => {
      // Grab Error
      console.log(err);
      dispatch(fetchJobsFailed());
    });
  }
}
export function fetchSingleJob(id){
  return (dispatch, getState) => {
    dispatch(grabbedJobs());
    return axios({
      url: API_URL + '/jobs/' + id,
      method: 'get',
      params: {}
    }).then(resp => {
      console.log(resp);
      dispatch(fetchJobsSuccess(resp));
    }).catch(err => {
      console.log(err);
      dispatch(fetchJobsFailed());
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

export function fetchJobsSuccess(resp) {
  return {
    type: types.FETCH_JOBS,
    list: resp.data,
    grabbing: false,
    error: false,
  }
}
export function fetchJobsFailed(resp) {
  return {
    type: types.FETCH_JOBS,
    error: true
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
