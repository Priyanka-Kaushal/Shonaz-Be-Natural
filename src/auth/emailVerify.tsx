import { Box, TextField, Typography, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import { toast } from "react-hot-toast";
import { useState } from "react";


const VerifyEmail: React.FC = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState(""); // <-- set error message here
  const location = useLocation();
  const navigate = useNavigate();
  const email = (location.state as { email?: string })?.email || "";

  const handleVerify = async () => {
    try {
      setError(""); 
      await axios.post("/api/auth/verify-otp", {
        email: email.toLowerCase(),
        code,
      });

      toast.success("Email verified!");
      navigate("/shop/new-arrivals");
    } catch (err: any) {
      const message =
        err?.response?.data?.message || "Verification failed. Try again.";
      setError(message); 
    }
  };

  return (
    <Box maxWidth="sm" mx="auto" mt={5}>
      <Typography variant="h5">Verify Email</Typography>
      <TextField
        label="Enter OTP"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        fullWidth
        margin="normal"
        error={Boolean(error)} 
        helperText={error}
      />
      <Button variant="contained" onClick={handleVerify}>
        Verify OTP
      </Button>
    </Box>
  );
};

export default VerifyEmail;

