import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  Container,
} from "@mui/material";
import axios from "../utils/axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import FullscreenLoader from "../Layouts/Spinner";
import SignUpWithGoogle from "./SignUpWithGoogle.tsx";

interface CreateAccountForm {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

const CreateAccount: React.FC = () => {
  const [formData, setFormData] = useState<CreateAccountForm>({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    try {
      await axios.post("/api/auth/signup", formData);
      toast.success("OTP sent to your email");
      navigate("/verifyEmail", { state: { email: formData.email } });
    } catch (err: any) {
      const message =
        err.response?.data?.message ||
        err.response?.data?.error ||
        err.message ||
        "Signup failed";

      if (message.toLowerCase().includes("email")) {
        setErrors({ email: message });
      } else if (message.toLowerCase().includes("password")) {
        setErrors({ password: message });
      } else {
        toast.error(message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      {loading && <FullscreenLoader />}
      <Box mt={5} p={4} boxShadow={3} borderRadius={2}>
        <Typography variant="h4" gutterBottom textAlign="center">
          Create Account
        </Typography>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              label="First Name"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              required
            />
            <TextField
              label="Last Name"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              required
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              error={Boolean(errors.email)}
              helperText={errors.email}
            />

            <TextField
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              error={Boolean(errors.password)}
              helperText={errors.password}
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              disabled={loading}
              sx={{mb: 1}}
            >
              {loading ? "Creating..." : "Sign Up"}
            </Button>
          </Stack>
        </form>
        
         <Typography
                  variant="body2"
                  textAlign="center"
                  sx={{ color: "#555", mt: 2}}
                >
                  or
                </Typography>
         <SignUpWithGoogle />
      </Box>
     
    </Container>
  );
};

export default CreateAccount;


