// import React, { useState, useMemo } from "react";
// import { Box, Typography, TextField, Button, Container } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { loginSuccess, loginFailure } from "../redux/actions/LoginAction";
// import NavigationButton from "./NavigationButton.tsx";
// import SignUpWithGoogle from "./SignUpWithGoogle.tsx";

// const LoginUser = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");

//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const lowerCase = useMemo(() => /[a-z]/, []);
//   const upperCase = useMemo(() => /[A-Z]/, []);
//   const numbers = useMemo(() => /[0-9]/, []);

//   const validateEmail = (email) =>
//     /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

//   const validatePassword = (password) => {
//     const errors = [];
//     if (!lowerCase.test(password)) errors.push("Lowercase letter required");
//     if (!upperCase.test(password)) errors.push("Uppercase letter required");
//     if (!numbers.test(password)) errors.push("Number required");
//     if (password.length < 8) errors.push("Minimum 8 characters required");
//     return errors;
//   };

//   const handleOnEmail = (e) => {
//     const emailInput = e.target.value;
//     setEmail(emailInput);
//     setEmailError(validateEmail(emailInput) ? "" : "Invalid email address");
//   };

//   const handleOnPassword = (e) => {
//     const passwordInput = e.target.value;
//     setPassword(passwordInput);
//     const passwordErrors = validatePassword(passwordInput);
//     setPasswordError(passwordErrors.length > 0 ? passwordErrors.join(", ") : "");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (emailError || passwordError || !email || !password) {
//       dispatch(loginFailure("Fix the errors before submitting."));
//       return;
//     }

//     const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:4000";
//     const API_URL = `${BASE_URL}/api/auth/signIn`;

//     try {
//       const response = await fetch(API_URL, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();
//       if (response.ok && data.token) {
//         localStorage.setItem("token", data.token);
//         dispatch(loginSuccess(data));
//         navigate("/");
//       } else {
//         dispatch(loginFailure(data.message || "Login failed"));
//         alert(data.message || "Login failed: No token received");
//       }
//     } catch (error) {
//       dispatch(loginFailure("Server error"));
//       alert("An error occurred while logging in.");
//     }
//   };

//   return (
//     <Container maxWidth="sm">
//       <Box mt={1} p={2} boxShadow={1} borderRadius={3}>
//         <Typography variant="h5" sx={{ mb: 1, color: "#000", fontWeight: 600 }}>
//           LOGIN
//         </Typography>
//         <Typography
//           variant="body1"
//           sx={{
//             mb: 2,
//             color: "#555",
//             fontSize: { xs: "0.9rem", sm: "1rem" },
//             lineHeight: 1.6,
//             textAlign: "left",
//           }}
//         >
//           Welcome to the Shonaz be Natural, Where comfort meets consciousness in fashion.
//           <br />
//           Tiny trends, Big impact.
//         </Typography>

//         <TextField
//           label="Email"
//           variant="outlined"
//           fullWidth
//           value={email}
//           onChange={handleOnEmail}
//           error={!!emailError}
//           helperText={emailError || " "}
//           sx={{ mb: 2 }}
//           FormHelperTextProps={{ sx: { minHeight: "20px" } }}
//         />

//         <TextField
//           label="Password"
//           type="password"
//           variant="outlined"
//           fullWidth
//           value={password}
//           onChange={handleOnPassword}
//           error={!!passwordError}
//           helperText={passwordError || " "}
//           sx={{ mb: 2 }}
//           FormHelperTextProps={{ sx: { minHeight: "20px" } }}
//         />

//         <Button
//           variant="contained"
//           fullWidth
//           sx={{
//             mb: 2,
//             backgroundColor: "#000",
//             color: "#fff",
//             ":hover": {
//               backgroundColor: "#333",
//             },
//           }}
//           disabled={!!emailError || !!passwordError || !email || !password}
//           onClick={handleSubmit}
//         >
//           SIGN IN
//         </Button>

//         <Box display="flex" gap={1}>
//           <Box flex={1}>
//             <NavigationButton
//               label="CREATE ACCOUNT"
//               to="/account/register"
//               sx={{ width: "100%" }}
//             />
//           </Box>
//           <Box flex={1}>
//             <NavigationButton
//               label="FORGOT PASSWORD"
//               to="/account/forgotPassword"
//               sx={{ width: "100%" }}
//             />
//           </Box>
//         </Box>

//         <Typography
//           variant="body2"
//           textAlign="center"
//           sx={{ mb: 1, color: "#555" }}
//         >
//           or
//         </Typography>
//         <SignUpWithGoogle />

//       </Box>
//     </Container>
//   );
// };

// export default LoginUser;
import React, { useState, useMemo } from "react";
import { Box, Typography, TextField, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess, loginFailure } from "../redux/actions/LoginAction";
import NavigationButton from "./NavigationButton.tsx";
import SignUpWithGoogle from "./SignUpWithGoogle.tsx";

const LoginUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const lowerCase = useMemo(() => /[a-z]/, []);
  const upperCase = useMemo(() => /[A-Z]/, []);
  const numbers = useMemo(() => /[0-9]/, []);

  const validateEmail = (email) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

  const validatePassword = (password) => {
    const errors = [];
    if (!lowerCase.test(password)) errors.push("Lowercase letter required");
    if (!upperCase.test(password)) errors.push("Uppercase letter required");
    if (!numbers.test(password)) errors.push("Number required");
    if (password.length < 8) errors.push("Minimum 8 characters required");
    return errors;
  };

  const handleOnEmail = (e) => {
    const emailInput = e.target.value;
    setEmail(emailInput);
    setEmailError(validateEmail(emailInput) ? "" : "Invalid email address");
  };

  const handleOnPassword = (e) => {
    const passwordInput = e.target.value;
    setPassword(passwordInput);
    const passwordErrors = validatePassword(passwordInput);
    setPasswordError(passwordErrors.length > 0 ? passwordErrors.join(", ") : "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (emailError || passwordError || !email || !password) {
      dispatch(loginFailure("Fix the errors before submitting."));
      return;
    }

    const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:4000";
    const API_URL = `${BASE_URL}/api/auth/signIn`;

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok && data.token) {
        localStorage.setItem("token", data.token);
        dispatch(loginSuccess(data));

        // Redirect based on role
        const userRole = data?.data?.user?.role;
        if (userRole === "admin" || userRole === "superadmin") {
          navigate("/dashboard/manageProduct");
        } else {
          navigate("/");
        }
      } else {
        dispatch(loginFailure(data.message || "Login failed"));
        alert(data.message || "Login failed: No token received");
      }
    } catch (error) {
      dispatch(loginFailure("Server error"));
      alert("An error occurred while logging in.");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={1} p={2} boxShadow={1} borderRadius={3}>
        <Typography variant="h5" sx={{ mb: 1, color: "#000", fontWeight: 600 }}>
          LOGIN
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 2,
            color: "#555",
            fontSize: { xs: "0.9rem", sm: "1rem" },
            lineHeight: 1.6,
            textAlign: "left",
          }}
        >
          Welcome to the Shonaz be Natural, Where comfort meets consciousness in fashion.
          <br />
          Tiny trends, Big impact.
        </Typography>

        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={handleOnEmail}
          error={!!emailError}
          helperText={emailError || " "}
          sx={{ mb: 2 }}
          FormHelperTextProps={{ sx: { minHeight: "20px" } }}
        />

        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          value={password}
          onChange={handleOnPassword}
          error={!!passwordError}
          helperText={passwordError || " "}
          sx={{ mb: 2 }}
          FormHelperTextProps={{ sx: { minHeight: "20px" } }}
        />

        <Button
          variant="contained"
          fullWidth
          sx={{
            mb: 2,
            backgroundColor: "#000",
            color: "#fff",
            ":hover": {
              backgroundColor: "#333",
            },
          }}
          disabled={!!emailError || !!passwordError || !email || !password}
          onClick={handleSubmit}
        >
          SIGN IN
        </Button>

        <Box display="flex" gap={1}>
          <Box flex={1}>
            <NavigationButton
              label="CREATE ACCOUNT"
              to="/account/register"
              sx={{ width: "100%" }}
            />
          </Box>
          <Box flex={1}>
            <NavigationButton
              label="FORGOT PASSWORD"
              to="/account/forgotPassword"
              sx={{ width: "100%" }}
            />
          </Box>
        </Box>

        <Typography
          variant="body2"
          textAlign="center"
          sx={{ mb: 1, color: "#555" }}
        >
          or
        </Typography>
        <SignUpWithGoogle />
      </Box>
    </Container>
  );
};

export default LoginUser;