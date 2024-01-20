import { combineReducers } from '@reduxjs/toolkit';
import Reducer from './Reducer';

const rootReducer = combineReducers({
  api: Reducer,
});

export default rootReducer;
