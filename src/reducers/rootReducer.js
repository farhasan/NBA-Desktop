import { combineReducers } from 'redux';
import dataReducers from './dataReducers';

// function exReducer(state = { 1: 'hello' }, action) {
//   return state;
// }

export default combineReducers(
  {
    splashUrlReducer: dataReducers.splashUrlReducer,
  },
);
