import {
  GET_JOBS,
  JOBS_LOADING,
  GET_JOB_DETAILS,
  LOADING_DETAILS
} from '../actions/types';

const INITIAL_STATE = {
  loading: true,
  jobs: [],
  newLoading: false,
  loadingDetails: true,
  jobDetails: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_JOBS:
      return { ...state, loading: false, jobs: action.payload }
    case JOBS_LOADING:
      return { ...state, newLoading: action.payload }
    case GET_JOB_DETAILS:
      return { ...state, loadingDetails: false, jobDetails: action.payload }
    case LOADING_DETAILS:
      return { ...state, loadingDetails: action.payload }
    default:
      return state;
  }
};
