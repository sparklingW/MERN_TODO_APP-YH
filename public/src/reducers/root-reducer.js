import { newUserReducer, userLoginReducer } from './users-reducer';
import { evenstReducer } from './events-reducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  newUserReducer,
  userLoginReducer,
  evenstReducer,
});