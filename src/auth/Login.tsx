import React, { useState, useMemo } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess, loginFailure } from "../redux/actions/LoginAction";
import NavigationButton from "./NavigationButton.tsx";

const LoginUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Optimized regex using useMemo
  const lowerCase = useMemo(() => /[a-z]/g, []);
  const upperCase = useMemo(() => /[A-Z]/g, []);
  const numbers = useMemo(() => /[0-9]/g, []);

  // Email validation regex
  const validateEmail = (email) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

  // Password validation logic
  const validatePassword = (password) => {
    const errors = [];
    if (!lowerCase.test(password)) errors.push("Lowercase letter required");
    if (!upperCase.test(password)) errors.push("Uppercase letter required");
    if (!numbers.test(password)) errors.push("Number required");
    if (password.length < 8) errors.push("Minimum 8 characters required");
    return errors;
  };

  // Email input handler
  const handleOnEmail = (e) => {
    const emailInput = e.target.value;
    setEmail(emailInput);
    if (!validateEmail(emailInput)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  // Password input handler
  const handleOnPassword = (e) => {
    const passwordInput = e.target.value;
    setPassword(passwordInput);
    const passwordErrors = validatePassword(passwordInput);
    if (passwordErrors.length > 0) {
      setPasswordError(passwordErrors.join(", "));
    } else {
      setPasswordError("");
    }
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for errors before submitting
    if (emailError || passwordError) {
      dispatch(loginFailure("Fix the errors before submitting."));
      return;
    }

    const credentials = { email, password };
    dispatch(loginSuccess(credentials));

    // Store the credentials in localStorage
    localStorage.setItem("token", JSON.stringify(credentials));

    // Navigate to the HomePage route after successful login
    navigate("/HomePage");
  };

  return (
    <Box
      sx={{
        marginTop: "50px",
        marginBottom: "50px",
      }}
    >
        <Box>
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
          LOGIN
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          sx={{ mb: 1 }}
          value={email}
          onChange={handleOnEmail}
          error={!!emailError}
          helperText={emailError}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          sx={{ mb: 1 }}
          value={password}
          onChange={handleOnPassword}
          error={!!passwordError}
          helperText={passwordError}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            mb: 2,
            backgroundColor: "#000",
            ":hover": { backgroundColor: "#333" },
          }}
          disabled={!!emailError || !!passwordError || !email || !password}
          onClick={handleSubmit}
        >
          SIGN IN
        </Button>
        </Box>
        <br />
        <Box>
          <NavigationButton
            label="FORGOT PASSWORD"
            to="/account/forgotPassword"
          />
          <NavigationButton label="CREATE ACCOUNT" to="/account/register" />
        </Box>
      </Box>
      </Box>
  );
};

export default LoginUser;
