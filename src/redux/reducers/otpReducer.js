const initialState = {
    loading: false,
    success: false,
    error: null,
    otp: null,
};

const otpReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEND_OTP_REQUEST':
            return { ...state, loading: true };
        case 'SEND_OTP_SUCCESS':
            return {
                loading: false,
                success: true,
                otp: action.payload.otp,
                error: null,
            };
        case 'SEND_OTP_FAIL':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
    

export default otpReducer;