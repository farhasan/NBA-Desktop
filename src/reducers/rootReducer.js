import { combineReducers } from 'redux';
import dataReducers from './dataReducers';

export default combineReducers({
  splashUrls: dataReducers.splashUrlReducer,
});
