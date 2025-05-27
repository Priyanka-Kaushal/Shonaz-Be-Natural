
// // import React, { useState } from "react";
// // import { Box, Typography, TextField, Button } from "@mui/material";
// // import { toast } from "react-hot-toast";
// // import { useLocation, useNavigate } from "react-router-dom";

// // const VerifyEmail: React.FC = () => {
 
// //   const navigate = useNavigate();
// //   const location = useLocation();
// //   const emailFromState = (location.state as { email?: string })?.email;

// //   const [otp, setOtp] = useState("");

// //   const handleVerify = async () => {
// //     try {
// //       const response = await fetch("", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ email: emailFromState, otp }),
// //       });

// //       const data = await response.json();

// //       if (response.ok) {
// //         toast.success("Email verified successfully!");
// //         navigate("/shop/new-arrivals");
// //       } else {
// //         toast.error(data.message || "Invalid OTP");
// //       }
// //     } catch (err) {
// //       toast.error("Error verifying OTP");
// //       console.error(err);
// //     }
// //   };

// //   return (
// //     <Box sx={{ maxWidth: 400, mx: "auto", mt: 8 }}>
// //       <Typography variant="h5" mb={3}>Verify Email</Typography>

// //       <Typography variant="body2" mb={2}>
// //         OTP sent to: <strong>{emailFromState}</strong>
// //       </Typography>

// //       <TextField
// //         label="Enter OTP"
// //         value={otp}
// //         onChange={(e) => setOtp(e.target.value)}
// //         fullWidth
// //         sx={{ mb: 2 }}
// //       />
// //       <Button variant="contained" fullWidth onClick={handleVerify}>
// //         Verify OTP
// //       </Button>
// //     </Box>
// //   );
// // };

// // export default VerifyEmail;
// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Typography,
//   TextField,
//   Button,
//   CircularProgress,
// } from "@mui/material";
// import { useNavigate, useLocation } from "react-router-dom";
// import { toast } from "react-hot-toast";

// const VerifyEmail = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Get email from location state or localStorage
//   const [email, setEmail] = useState(() => {
//     return location.state?.email || localStorage.getItem("verify_email") || "";
//   });

//   const [otp, setOtp] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleVerify = async () => {
//     if (!otp.trim()) {
//       toast.error("Please enter the OTP");
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await fetch("http://localhost:4000/api/auth/verify-otp", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, otp }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         toast.success("Email verified successfully!");
//         localStorage.removeItem("verify_email"); // Clean up
//         navigate("/account/login");
//       } else {
//         toast.error(data.message || "Invalid or expired OTP");
//       }
//     } catch (error) {
//       toast.error("Server error. Try again.");
//       console.error("OTP verification error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (!email) {
//       toast.error("No email provided. Please register first.");
//       navigate("/account/register");
//     }
//   }, [email, navigate]);

//   return (
//     <Box
//       sx={{
//         marginTop: "60px",
//         marginBottom: "40px",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         maxWidth: "400px",
//         marginX: "auto",
//         padding: "20px",
//         boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
//         borderRadius: "8px",
//       }}
//     >
//       <Typography variant="h6" sx={{ mb: 2 }}>
//         Verify Your Email
//       </Typography>
//       <Typography variant="body2" sx={{ mb: 2 }}>
//         Please enter the OTP sent to <strong>{email}</strong>
//       </Typography>
//       <TextField
//         label="OTP"
//         variant="outlined"
//         fullWidth
//         value={otp}
//         onChange={(e) => setOtp(e.target.value)}
//         sx={{ mb: 2 }}
//       />
//       <Button
//         variant="contained"
//         color="primary"
//         fullWidth
//         disabled={loading}
//         onClick={handleVerify}
//         sx={{
//           backgroundColor: "#000",
//           ":hover": { backgroundColor: "#333" },
//         }}
//       >
//         {loading ? <CircularProgress size={24} color="inherit" /> : "Verify OTP"}
//       </Button>
//     </Box>
//   );
// };

// export default VerifyEmail;
import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-hot-toast";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get email from location state or localStorage
  const [email, setEmail] = useState(() => {
    return location.state?.email || localStorage.getItem("verify_email") || "";
  });

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVerify = async () => {
    if (!otp.trim()) {
      toast.error("Please enter the OTP");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:4000/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Email verified successfully!");
        localStorage.removeItem("verify_email"); // Clean up
        navigate("/"); // ✅ Redirect to home
      } else {
        toast.error(data.message || "Invalid or expired OTP");
      }
    } catch (error) {
      toast.error("Server error. Try again.");
      console.error("OTP verification error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!email) {
      toast.error("No email provided. Redirecting to home.");
      navigate("/"); // ✅ Redirect to home if no email
    }
  }, [email, navigate]);

  return (
    <Box
      sx={{
        marginTop: "60px",
        marginBottom: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "400px",
        marginX: "auto",
        padding: "20px",
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
      }}
    >
      <Typography variant="h6" sx={{ mb: 2 }}>
        Verify Your Email
      </Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>
        Please enter the OTP sent to <strong>{email}</strong>
      </Typography>
      <TextField
        label="OTP"
        variant="outlined"
        fullWidth
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        disabled={loading}
        onClick={handleVerify}
        sx={{
          backgroundColor: "#000",
          ":hover": { backgroundColor: "#333" },
        }}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : "Verify OTP"}
      </Button>
    </Box>
  );
};

export default VerifyEmail;
