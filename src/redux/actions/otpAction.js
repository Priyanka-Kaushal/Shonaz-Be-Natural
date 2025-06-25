// import axios from 'axios';

// export const sendOtp = (email) => async (dispatch) => {
//     try {
//         dispatch({ type: 'SEND_OTP_REQUEST' });


//     const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:4000";
//     const API_URL = `${BASE_URL}/api/auth/verify-otp`;


//     try {
//           const response = await fetch(API_URL, {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ email, otp }),
//           });
    
//           const data = await response.json();
    
//           if (response.ok) {
//             toast.success("Email verified successfully!");
//             localStorage.removeItem("verify_email");
    
//             // Optional: update Redux store
//             // dispatch(setUser(data.user));
//             debugger;
//             navigate(from, { replace: true });
//           } else {
//             toast.error(data.message || "Invalid or expired OTP");
//           }
//         } catch (error) {
//           toast.error("Server error. Try again.");
//           console.error("OTP verification error:", error);
//         } finally {
//           setLoading(false);
//         }
//       };

//         const { data } = await axios.post('http://localhost:4000/send-otp', { email });

//         dispatch({ type: 'SEND_OTP_SUCCESS', payload: data });
//     } catch (error) {
//         dispatch({
//             type: 'SEND_OTP_FAIL',
//             payload: error.response?.data?.error || 'Something went wrong',
//         });
//     }
// };


// import { EMAIL, OTP } from "./actionType";

// export const email = (email)=> ({
//     type: EMAIL,
//     payload: email,
// });

// export const OTP = () => ({
//     type: OTP,
//     payload: otp
// });


// export const verifyOtp = (email, otp) => async (dispatch) => {
//   try {
//     const response = await fetch("http://localhost:4000/api/auth/verify-otp", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, otp })
//     });

//     if (!response.ok) throw new Error('OTP verification failed');

//     const data = await response.json();
//     const { user, token } = data;

//     localStorage.setItem('authToken', token);
//     localStorage.setItem('user', JSON.stringify(user));

//     dispatch({
//       type: LOGIN_SUCCESS,
//       payload: user
//     });
//   } catch (error) {
//     dispatch({
//       type: LOGIN_FAILURE,
//       payload: error.message
//     });
//   }
// };
import {
  EMAIL,
  OTP_INPUT,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../actions/actionType';

const initialState = {
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
