import { Box, Typography, Button, TextField, Link } from "@mui/material";
import {useState } from "react";
import { toast } from "react-hot-toast";

const CreateAccount = () => {

  
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnName = (e) => {
    setName(e.target.value);
  }

  const handleOnLastName = (e) => {
    setLastName(e.target.value);
  }

  const handleOnEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleOnPassword = (e) => {
    const pass = e.target.value;
    setPassword(pass);
    console.log(pass);
  }
  
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (password.length < 6) {
      toast.error("Password should contain minimum 6 characters");
      return;
    }

  }



  return (
    <>
      <Box
        sx={{
          marginTop: "60px",
          marginBottom: "40px",
      }}
      >
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
          <TextField
            label="First name"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            value={name}
            onChange = {handleOnName}
          />
          <TextField
            label="Last name"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            value={lastname}
            onChange = {handleOnLastName}
          />
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            value={email}
            onChange = {handleOnEmail}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            value={password}
            onChange = {handleOnPassword}
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
            onClick={handleOnSubmit}
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
    </>
  );
};

export default CreateAccount;
