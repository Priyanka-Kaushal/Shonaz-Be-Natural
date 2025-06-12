import * as React from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Link
} from "@mui/material";
import { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CreateAccount: React.FC = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const newErrors: { [key: string]: string } = {};
    const { first_name, last_name, email, password } = formData;

    // Basic validation
    if (!first_name.trim()) newErrors.first_name = "First name is required";
    if (!last_name.trim()) newErrors.last_name = "Last name is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(email)) newErrors.email = "Invalid email format";

    if (!password.trim()) newErrors.password = "Password is required";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      toast.error("Please fix the errors before submitting.");
      return;
    }

    setErrors({});

    try {
      const BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:4000";

      const response = await fetch(`${BASE_URL}/api/auth/signUp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Account created successfully!");
        localStorage.setItem("verify_email", formData.email);
        localStorage.setItem("user_role", data?.user?.role);
        navigate("/verifyEmail", { state: { email: formData.email } });
      } else if (response.status === 409) {
        toast.error(data.message || "User already exists.");
      } else {
        toast.error(data.message || "Signup failed.");
      }
    } catch (error) {
      toast.error("An error occurred.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const fields = [
    { label: "First name", name: "first_name" },
    { label: "Last name", name: "last_name" },
    { label: "Email", name: "email", type: "email" },
    { label: "Password", name: "password", type: "password" },
  ];

  return (
    <Box sx={{ marginTop: "60px", marginBottom: "40px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "400px",
          margin: "auto",
          mt: "20px",
          padding: "20px",
          boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
        }}
      >
        <Typography variant="h6" sx={{ mb: 2 }}>
          Create Account
        </Typography>

        <form style={{ width: "100%" }} onSubmit={handleOnSubmit}>
          {fields.map(({ label, name, type = "text" }) => (
            <TextField
              key={name}
              label={label}
              name={name}
              type={type}
              variant="outlined"
              fullWidth
              sx={{ mb: 2 }}
              value={formData[name as keyof typeof formData]}
              onChange={handleChange}
              error={!!errors[name]}
              helperText={errors[name]}
            />
          ))}

          <Button
            variant="contained"
            fullWidth
            type="submit"
            sx={{
              mb: 2,
              backgroundColor: "#000",
              ":hover": { backgroundColor: "#333" },
            }}
            disabled={loading}
          >
            {loading ? "Creating..." : "CREATE ACCOUNT"}
          </Button>
        </form>

        <Typography variant="body2">
          Already have an account?{" "}
          <Link href="/account/login" underline="hover">
            Log in here
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default CreateAccount;

