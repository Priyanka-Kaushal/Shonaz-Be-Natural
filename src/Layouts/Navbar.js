import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Drawer,
  Button,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchPage from "../Layouts/SearchPage";
import { useMediaQuery } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const style = {
  backgroundColor: 'transparent',
  pointerEvents: 'none',
};


const Navbar = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [openSearchModal, setOpenSearchModal] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openDrawer, setOpenDrawer] = useState({
    left: false,
    Right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpenDrawer({ ...openDrawer, [anchor]: open });
  };

  const toggleMobileMenu = (state) => () => {
    setMobileMenu(state);
  };

  const handleOpenSearchModal = () => {
    setOpenSearchModal(true);
  };

  const handleCloseSearchModal = () => {
    setOpenSearchModal(false);
  };

  const DrawerList = (anchor) => (
    <Box
      className="leftDrawerMenu rightdrawerCheckOut"
      sx={{
        width: 300,
        padding: "60px 0",
        "@media (max-width: 600px)": {
          gap: 2,
          height: "auto",
          zIndex: 1301,
          // opacity: 0.5,
          position: "relative",
        },
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {anchor === "right" ? (
        <>
          {/* Right Drawer (Cart) */}
          <Typography>Your Cart</Typography>
          <Typography variant="h4">Subtotal: </Typography>
          <Typography variant="h6">
            Taxes and shipping calculated at checkout.
          </Typography>
          <Button variant="contained" color="primary" fullWidth>
            Checkout
          </Button>
        </>
      ) : (
        <>

        <div className="transparent" component = "leftDrawer" sx = {style}>
         {/* Left Drawer (Shop, New, Collection) */}
         <Link
            to="/newCollll"
            style={{ display: "block", padding: "20px 60px 0px 60px", pointerEvents: "auto"}}
          >
            Newwwwwwwwwwwww
          </Link>
          <Link
            to="/new"
            style={{ display: "block", padding: "20px 60px 0px 60px" }}
          >
            NEW
          </Link>
          <Link
            to="/collection"
            style={{ display: "block", padding: "20px 60px 0px 60px" }}
          >
            COLLECTION
          </Link>
        </div>
          
        </>
      )}
    </Box>
  );

  // for mobile menu
  const MobileMenu = (
    <Box className="menuForMobile" sx={{ padding: 2 }}>
      <Link to="/shop" style={{ display: "block", padding: "10px 0" }}>
        SHOP
      </Link>
      <Link to="/new" style={{ display: "block", padding: "10px 0" }}>
        NEW
      </Link>
      <Link to="/collection" style={{ display: "block", padding: "10px 0" }}>
        COLLECTION
      </Link>
    </Box>
  );

  return (
    <Box
      className="mainNavBar"
      fullWidth
      sx={{
        flexGrow: 1,
        mb: 2,
        "@media (max-width: 600px)": {
          gap: 2,
        },
      }}
    >
      <AppBar
        className="navigationBar appBar"
        position="fixed"
        sx={{
          backgroundColor: "white",
          boxShadow: "none",
          padding: "0 20px 0px 10px",
        }}
      >
        <Toolbar
          className="mainContainer"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: { xs: "0 10px", sm: "0 20px" },
          }}
        >
          {/* Left-aligned items */}
          <Box
            className="collapse navbarCollapse leftNavBarSection"
            id="collapsibleNavbar"
            sx={{
              display: { xs: "none", md: "flex" },
              gap: { xs: 1, sm: 2 },
              flexWrap: "wrap",
              minWidth: "unset",
              flexGrow: 0,
            }}
          >
            <Link
              onClick={toggleDrawer("left", true)}
              style={{
                color: "black",
                cursor: "pointer",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "16px",
                textAlign: "center",
              }}
            >
              SHOP
            </Link>
            <Link
              onClick={toggleDrawer("left", true)}
              style={{
                color: "black",
                cursor: "pointer",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "16px",
                textAlign: "center",
              }}
            >
              NEW
            </Link>
            <Link
              onClick={toggleDrawer("left", true)}
              style={{
                color: "black",
                cursor: "pointer",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "16px",
                textAlign: "center",
              }}
            >
              COLLECTION
            </Link>
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={toggleMobileMenu(true)}
          >
            <MenuIcon />
          </IconButton>

          {/* Center-aligned item */}
          <Box className="middleNavBarSection">
            <Link
              to="/"
              style={{
                color: "black",
                fontWeight: "bold",
                textAlign: "center",
                textDecoration: "none",
                fontSize: "20px",
              }}
            >
              SHONAZ BE NATURAL
            </Link>
          </Box>

          {/* Right-aligned items */}
          <Box
            className="RightNavBarSection"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 1, sm: 2 },
              flexWrap: "wrap",
            }}
          >
            {/* Search Button */}

            {isMobile ? (
              // Render icon for mobile devices
              <Button
                onClick={handleOpenSearchModal}
                sx={{
                  color: "black",
                  padding: "8px",
                  minWidth: "unset", // Prevent the button from taking up too much space
                }}
              >
                <SearchIcon />
              </Button>
            ) : (
              // Render text button for larger screens
              <Button
                onClick={handleOpenSearchModal}
                sx={{
                  color: "black",
                  textDecoration: "none",
                  padding: "10px",
                  fontWeight: "bold",
                  fontSize: "14px",
                  "@media (max-width: 600px)": {
                    fontSize: "12px",
                  },
                }}
              >
                Search
              </Button>
            )}

            {/* Account Link */}

            {!isMobile && ( // Only render on larger screens
              <Link
                to="/account/login"
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              >
                ACCOUNT
              </Link>
            )}

            {/* Cart Drawer */}
            <Link
              onClick={toggleDrawer("right", true)}
              style={{
                color: "black",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              CART
            </Link>
            <Drawer
              anchor="left"
              open={openDrawer.left}
              onClose={toggleDrawer("left", false)}
            >
              {DrawerList("left")}
            </Drawer>

            <Drawer
              anchor="right"
              open={openDrawer.right}
              onClose={toggleDrawer("right", false)}
            >
              {DrawerList("right")}
            </Drawer>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Menu Drawer */}
      <Drawer anchor="left" open={mobileMenu} onClose={toggleMobileMenu(false)}>
        {MobileMenu}
      </Drawer>

      {/* Search Modal */}
      <SearchPage open={openSearchModal} handleClose={handleCloseSearchModal} />
    </Box>
  );
};

export default Navbar;
