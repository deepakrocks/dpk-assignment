import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import sampleReducer from './Reducers';

export default combineReducers({
  sampleReducer,
  routing: routerReducer,
});
