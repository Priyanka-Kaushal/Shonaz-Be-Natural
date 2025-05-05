import * as React from 'react';
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
    name: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const newErrors: { [key: string]: string } = {};
    const { name, lastname, email, password } = formData;

    if (!name.trim()) newErrors.name = "First name is required";
    if (!lastname.trim()) newErrors.lastname = "Last name is required";
     // Email validation using regex
     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
     if (!email.trim()) newErrors.email = "Email is required";
     else if (!emailRegex.test(email)) newErrors.email = "Invalid email format";
      
     if (!password.trim()) newErrors.password = "Password is required";
     else if (password.length < 6)
       newErrors.password = "Password must be at least 6 characters";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      toast.error("Please fix the errors before submitting.");
      return;
    }

    setErrors({});

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) =>
      data.append(key, value)
    );

    console.log("Form Data:", Object.fromEntries(data.entries()));

    navigate("/verifyEmail");
  };

  const fields = [
    { label: "First name", name: "name" },
    { label: "Last name", name: "lastname" },
    { label: "Email", name: "email", type: "email" },
    { label: "Password", name: "password", type: "password" }
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
          padding: "20px",
          boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
        }}
      >
        <Typography variant="h6" sx={{ mb: 2 }}>
          Create Account
        </Typography>

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
          sx={{
            mb: 2,
            backgroundColor: "#000",
            ":hover": { backgroundColor: "#333" },
          }}
          onClick={handleOnSubmit}
          disabled={loading}
        >
          CREATE ACCOUNT
        </Button>

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
