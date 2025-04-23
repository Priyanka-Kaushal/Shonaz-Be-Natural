import { configureStore } from '@reduxjs/toolkit';
import emailReducer from '../reducers/loginReducer';

const store = configureStore({
  reducer: {
    login: emailReducer,
  },
});

export default store;

