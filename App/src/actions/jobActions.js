import * as types from '../constants/ActionTypes';
import { API_URL } from '../constants/API';
import axios from 'axios';
import _ from 'lodash';

export function fetchJobs(numberOfRequests, center, radius){
  if (typeof numberOfRequests === 'undefined') {
    numberOfRequests = null;
  }
  if (typeof center === 'undefined') {
    center = null;
    radius = null;
  }
  return (dispatch, getState) => {
    // Grabbing Jobs
    dispatch(grabbedJobs());
    return axios({
      url: API_URL + '/jobs',
      method: 'get',
      params: {
        number: numberOfRequests ? numberOfRequests : null, // Number Limit Query
        lat: center ? center.lat : null,
        lng: center ? center.lng : null,
        radius: radius ? radius : null
      }
    }).then(resp => {
      dispatch(fetchJobsSuccess(resp));
    }).catch(err => {
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
      dispatch(fetchJobsSuccess(resp));
    }).catch(err => {
      dispatch(fetchJobsFailed());
    });
  }
}
export function addJob(data){
  return(dispatch, getState) => {
    // Dispatch Posting Job
    return axios({
      url: API_URL + '/jobs',
      method: 'post',
      data: {
        activityName: data.activityName,
        excerpt: data.excerpt,
        description: data.description,
        type: data.type,
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
