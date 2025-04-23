import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
  } from "../actions/actionType";
  
  const initialState = {
    save_credetenials: localStorage.getItem("save_credentials") || "true",
  };
  
  const emailReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_SUCCESS:
        localStorage.setItem("logiin_succesfull", action.payload);
        return { ...state, logiin_succesfull: action.payload };
  
      case LOGIN_FAILURE:
        localStorage.setItem("logiin_failure", action.payload);
        return { ...state, logiin_failure: action.payload };
  
      default:
        return state;
    }
  };
  
  export default emailReducer;
  