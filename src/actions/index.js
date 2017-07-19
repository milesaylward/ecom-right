import firebase from 'firebase';
import {
  GET_JOBS,
  JOBS_LOADING,
  LOADING_DETAILS,
  GET_JOB_DETAILS
} from './types';

export const loadingJobs = (bool) => {
  return {
    type: JOBS_LOADING,
    payload: bool
  };
}

export const fetchJobs = (num) => {
  return (dispatch) => {
    dispatch({
      type: JOBS_LOADING,
      payload: true
    })
    firebase.database().ref('/')
      .limitToFirst(num).on('value', snapshot => {
        dispatch({
          type: GET_JOBS,
          payload: snapshot.val()
        });
        dispatch({
          type: JOBS_LOADING,
          payload: false
        });
      });
  }
}

export const getJobDetails = (id) => {
  return (dispatch) => {
    dispatch({
      type: LOADING_DETAILS,
      payload: true
    });
    firebase.database().ref('/')
      .child(id).on('value', snapshot => {
        dispatch({
          type: GET_JOB_DETAILS,
          payload: snapshot.val()
        });
        dispatch({
          type: LOADING_DETAILS,
          payload: false
        });
      });
  }
}
