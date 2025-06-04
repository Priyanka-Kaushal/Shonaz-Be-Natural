import React from "react";
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const MenuDrawer = ({ anchor, open, onClose, content }) => {
  const renderContent = () => {
    switch (content) {
      case "shop":
        return <Typography variant="h6">Shop Categories</Typography>;
      case "new":
        return <Typography variant="h6">New Arrivals</Typography>;
      case "collection":
        return <Typography variant="h6">Collections</Typography>;
      case "cart":
        return <Typography variant="h6">Your Cart Items</Typography>;
      case "profile":
        return <Typography variant="h6">User Profile</Typography>;
      default:
        return <Typography variant="h6">Drawer Content</Typography>;
    }
  };

  return (
    <Drawer
      anchor={anchor}
      open={open}
      onClose={onClose}
      sx={{ zIndex: 1400 }}
    >
      <Box sx={{ width: anchor === "left" ? 300 : 350, p: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            {content.toUpperCase()}
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <Box sx={{ mt: 2 }}>{renderContent()}</Box>
      </Box>
    </Drawer>
  );
};

export default MenuDrawer;
