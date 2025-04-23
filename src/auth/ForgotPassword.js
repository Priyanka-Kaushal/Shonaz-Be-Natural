import React from "react";
import { Box, Typography, TextField, Button, Link } from "@mui/material";
import { useState } from "react";

const FogrgotPassword = () => {
  const [email, setEmail] = useState();

  const handleOnEmail = (e) => {
    setEmail(e.target.value);
  };


  const handleOnSubmit = (e) => {
    e.preventDefault();
}
  return (
    <>
      <Box
        sx={{
            marginTop: "50px",
            marginBottom: "50px",
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
          <Typography variant="h4" sx={{ mb: 2 }}>
            Reset your password
          </Typography>
          <Typography  sx={{ mb: 2 }}> We will send you an email to reset your password. </Typography>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            value={email}
            onChange={handleOnEmail}
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
            SUBMIT
          </Button>
          <Link href="/account/login" underline="hover">
            Cancel
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default FogrgotPassword;
