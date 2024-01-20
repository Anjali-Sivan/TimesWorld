import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../Redux/index';

const store = configureStore({
  reducer: rootReducer,
});

export default store;
