import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import jobsReducer from './jobReducer';

export default combineReducers({
  routing: routerReducer,
  jobs: jobsReducer
})
