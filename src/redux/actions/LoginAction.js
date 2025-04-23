import {LOGIN_SUCCESS, LOGIN_FAILURE} from "../actions/actionType";

  export const loginSuccess = (succesfulLogin)=> ({
    type : LOGIN_SUCCESS,
    payload: succesfulLogin,
  });

  export const loginFailure = (faliureLogin)=> ({
    type : LOGIN_FAILURE,
    payload: faliureLogin,
  });