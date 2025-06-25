import React from "react";
import { Box, Typography, Link, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AccountPage = () => {
  const navigate = useNavigate();

  const handleAddAddress = () => {
    navigate("/account/add-address");
  };

  return (
    <>
      <Typography variant="h3" sx={{ mb: 3 }}>
        Account
      </Typography>

      <Box sx={{ mb: 3 }}>
        <Typography variant="h6">Username</Typography>
        <Typography variant="body1">user@example.com</Typography>

        <Link component="button" onClick={() => navigate("/account/addresses")} sx={{ mt: 1, display: "block" }}>
          View addresses (1)
        </Link>

        <Button variant="outlined" onClick={handleAddAddress} sx={{ mt: 2 }}>
          Add a new address
        </Button>
      </Box>

      <Typography variant="h5">You haven't placed any orders yet.</Typography>
    </>
  );
};

export default AccountPage;
