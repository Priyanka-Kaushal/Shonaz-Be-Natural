// import React, { Fragment } from "react";
// import {
//   Typography,
//   Box,
//   Button,
//   Link,
//   TextField,
//   Stack,
//   Divider
// } from "@mui/material";

// const VerifyUser: React.FC = () => {

//     const handle_otp = () => {
      
//         try{ },
//         catch(){

//         }
//     }

//   return (
//     <Fragment>
//       <Box
//         sx={{
//           maxWidth: 500,
//           margin: "5% auto",
//           padding: 0,
//           textAlign: "center",
//           borderRadius: 3,
//           boxShadow: 3,
//           backgroundColor: "#ffffff",
//         }}
//       >

//         {/* Top Section - Light Grey */}
//         <Box sx={{ backgroundColor: "#f0f0f0", p: 3, borderTopLeftRadius: 12, borderTopRightRadius: 12 }}>
//           <Typography variant="h5" gutterBottom color="primary">
//             THANKS FOR SIGNING UP!
//           </Typography>
//           <Typography variant="subtitle1" gutterBottom>
//             Verify Your OTP 
//           </Typography>
//         </Box>

//         {/* Main Body */}
//         <Box sx={{ px: 4, py: 2 }}>
//           <Typography variant="body1" gutterBottom>
//             Please use the following One Time Password (OTP):
//           </Typography>

//           <TextField
//             label="Enter OTP"
//             variant="outlined"
//             fullWidth
//             sx={{ my: 2 }}
//           />

//           <Typography variant="body2" sx={{ mb: 2 }}>
//             This passcode will only be valid for the next 2 minutes. If it doesn't work, you can use the login verification link below.
//           </Typography>

//           <Button
//             variant="contained"
//             sx={{
//               backgroundColor: "green",
//               ":hover": { backgroundColor: "rgba(137, 184, 137, 0.3)" },
//               mb: 2,

//               onclick ={handle_otp};
//             }}
//             fullWidth
//           >
//             Verify Your OTP 
//           </Button>

//           <Typography variant="body2" color="textSecondary" gutterBottom>
//             Thank you,<br />
//             Infynno Team
//           </Typography>

//           <Typography variant="caption" color="textSecondary" gutterBottom>
//             This email was sent from sales@infynno.com. If you'd rather not receive this kind of email, you can unsubscribe or manage your email preferences.
//           </Typography>
//         </Box>

//         {/* Get in Touch - Light Transparent Green */}
//         <Box
//           sx={{
//             backgroundColor: "rgba(230, 236, 230, 0.3)", // light green with transparency
//             px: 4,
//             py: 3,
//           }}
//         >
//           <Typography variant="subtitle2" gutterBottom>Get in Touch</Typography>
//           <Typography variant="body2">📞 +91-XXXXXXXXXX</Typography>
//           <Typography variant="body2">📧 shonaz@gmail.com </Typography>

//           <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 2 }}>
//             <Link href="#" underline="hover">Facebook</Link>
//             <Link href="#" underline="hover">Instagram</Link>
//             <Link href="#" underline="hover">LinkedIn</Link>
//           </Stack>
//         </Box>

//         {/* Footer - Light Grey */}
//         <Box sx={{ backgroundColor: "#f0f0f0", py: 2, borderBottomLeftRadius: 12, borderBottomRightRadius: 12 }}>
//           <Typography variant="caption" color="textSecondary">
//             © 2025 Shonaz. All Rights Reserved.
//           </Typography>
//         </Box>
//       </Box>
//     </Fragment>
//   );
// };

// export default VerifyUser;


// // import React, { useState } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { sendOtp } from '../redux/actions/otpAction';

// // const OtpSender = () => {
// //     const [email, setEmail] = useState('');
// //     const dispatch = useDispatch();

// //     const { loading, success, error, otp } = useSelector((state) => state.otp);

// //     const handleSendOtp = () => {
// //         dispatch(sendOtp(email));
// //     };

// //     return (
// //         <div>
// //             <h2>Send OTP</h2>
// //             <input
// //                 type="email"
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //                 placeholder="Enter your email"
// //             />
// //             <button onClick={handleSendOtp} disabled={loading}>
// //                 Send OTP
// //             </button>

// //             {loading && <p>Sending...</p>}
// //             {success && <p>OTP sent successfully! (OTP: {otp})</p>}
// //             {error && <p style={{ color: 'red' }}>{error}</p>}
// //         </div>
// //     );
// // };

// // export default OtpSender;

import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const VerifyEmail: React.FC = () => {
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleVerify = async () => {
    try {
      const response = await fetch("http://localhost:4000/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Email verified successfully!");
        // Redirect to login or dashboard
        navigate("/shop/new-arrivals");
      } else {
        toast.error(data.message || "Invalid OTP");
      }
    } catch (err) {
      toast.error("Error verifying OTP");
      console.error(err);
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 8 }}>
      <Typography variant="h5" mb={3}>Verify Email</Typography>
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />
      <Button variant="contained" fullWidth onClick={handleVerify}>
        Verify OTP
      </Button>
    </Box>
  );
};

export default VerifyEmail;

