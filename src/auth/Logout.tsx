import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LogoutUser = () => {
  const [isLoggedin, setIsLoggedin] = useState(true); // Assuming user is logged in initially
  const navigate = useNavigate();

  const logoutUser = () => {
    localStorage.removeItem("token"); // Adjust if your token key is different
    setIsLoggedin(false);
    navigate("/login"); // Redirect to login page
  };

  return (
    <Box>
      {isLoggedin && (
        <Button
          onClick={logoutUser}
          variant="contained"
          color="error"
          sx={{ mt: 2 }}
        >
          Logout
        </Button>
      )}
    </Box>
  );
};

export default LogoutUser;
