import { configureStore } from '@reduxjs/toolkit';
import emailReducer from '../reducers/loginReducer';
import otpReducer from "../reducers/otpReducer";

const store = configureStore({
  reducer: {
    login: emailReducer,
    otp: otpReducer,
  },
});

export default store;
