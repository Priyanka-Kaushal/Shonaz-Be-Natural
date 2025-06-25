
import {
  EMAIL,
  OTP_INPUT,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../actions/actionType';

const initialState = {
  email: '',
  otp: '',
  user: JSON.parse(localStorage.getItem('user')) || null,
  authToken: localStorage.getItem('authToken') || null,
  error: null
};

const otpReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMAIL:
      return { ...state, email: action.payload };
    case OTP_INPUT:
      return { ...state, otp: action.payload };
    case LOGIN_SUCCESS:
      return { ...state, user: action.payload, error: null };
    case LOGIN_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default otpReducer;
