import firebase from 'firebase';
import {
  GET_JOBS,
  JOBS_LOADING
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
        })
      });
  }
}
