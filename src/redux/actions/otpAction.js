// import axios from 'axios';

// export const sendOtp = (email) => async (dispatch) => {
//     try {
//         dispatch({ type: 'SEND_OTP_REQUEST' });

//         const { data } = await axios.post('http://localhost:4000/send-otp', { email });

//         dispatch({ type: 'SEND_OTP_SUCCESS', payload: data });
//     } catch (error) {
//         dispatch({
//             type: 'SEND_OTP_FAIL',
//             payload: error.response?.data?.error || 'Something went wrong',
//         });
//     }
// };
