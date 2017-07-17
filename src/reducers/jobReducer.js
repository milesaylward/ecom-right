import {
  GET_JOBS,
  JOBS_LOADING
} from '../actions/types';

const INITIAL_STATE = {
  loading: true,
  jobs: [],
  newLoading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {...state, loading: false, jobs: action.payload }
    case JOBS_LOADING:
      return {...state, newLoading: action.payload }
    default:
      return state;
  }
};
