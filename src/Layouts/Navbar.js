import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Drawer, Button, Typography, AppBar, Toolbar } from '@mui/material';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (openState) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setOpen(openState);
  };

  const DrawerList = (
    <Box
      sx={{ width: 250, padding: 2 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Typography> Your Cart </Typography>
      
      <Typography variant="h4">Subtotal: </Typography>
      <Typography variant="h6">Taxes and shipping calculated at checkout. </Typography>

      
      <Button variant="contained" color="primary" fullWidth>
        Checkout
      </Button>
    </Box>
  );


  return (
    <Box fullWidth sx={{ flexGrow: 1, mb: 2 }}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: 'transparent',
          boxShadow: 'none',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* Left-aligned items */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Typography
              sx={{
                color: 'black',
                cursor: 'pointer',
              }}
            >
              SHOP
            </Typography>
            <Typography
              sx={{
                color: 'black',
                cursor: 'pointer',
              }}
            >
              NEW
            </Typography>
            <Typography
              sx={{
                color: 'black',
                cursor: 'pointer',
              }}
            >
              COLLECTION
            </Typography>
          </Box>

          {/* Center-aligned item */}
          <Link
            to="/"
            style={{
              color: 'black',
              fontWeight: 'bold',
              textAlign: 'center',
              textDecoration: 'none',
              fontSize: '20px', // Optional for better styling
            }}
          >
            SHONAZ BE NATURAL
          </Link>

          {/* Right-aligned items */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Typography
              sx={{
                color: 'black',
                cursor: 'pointer',
              }}
            >
              SEARCH
            </Typography>
            <Link
              to="/account/login"
              style={{
                color: 'black',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              ACCOUNT
            </Link>
          
              
          

            <Box>
      {/* Link to trigger the Drawer */}
      <Link
        to="#"
        style={{
          color: 'black',
          textDecoration: 'none',
          cursor: 'pointer',
          fontWeight: 'bold',
        }}
        onClick={toggleDrawer(true)}
      >
        CART
      </Link>

      {/* Drawer Component */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>

      
    </Box>


       

            
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
