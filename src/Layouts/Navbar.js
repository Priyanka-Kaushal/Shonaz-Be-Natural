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
  CardMedia,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchPage from "../Layouts/SearchPage";
import { useMediaQuery } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { CenterFocusStrong } from "@mui/icons-material";
import BannerImage from "../Assets/Images/weed2.jpg";

import { useNavigate } from "react-router-dom";

const style = {
  backgroundColor: "transparent",
  pointerEvents: "none",
};

const Navbar = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [openSearchModal, setOpenSearchModal] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openDrawer, setOpenDrawer] = useState({
    left: false,
    Right: false,
  });
  const [drawerType, setDrawerType] = useState(null); // 'shop' | 'new' | 'collection'

  const navigate = useNavigate();

  const handleStartShopping = () => {
    navigate("/shop/new-arrivals");
  };

  const toggleDrawer =
    (anchor, open, type = null) =>
    (event) => {
      if (
        event &&
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }
      setDrawerType(type);
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
        width: 400,
        textAlign: "left",
        padding: "60px 0",
        position: "relative",
        top: "60%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        "@media (max-width: 600px)": {
          gap: 2,
          height: "auto",
          zIndex: 1301,
        },
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {anchor === "right" ? (
        <>
          <Typography sx={{ mb: "12px" }}>Your Cart Is empty</Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleStartShopping}
          >
            START SHOPPING
          </Button>
        </>
      ) : (
        <>
          {drawerType === "shop" && (
            <>
              <Link to="/ethnic-wear" style={linkStyle}>
                Ethnic Wear
              </Link>
              <Link to="/indian-western" style={linkStyle}>
                Indian Western Wear
              </Link>
              <Link to="/sleepwear" style={linkStyle}>
                Sleepwear
              </Link>
              <Link to="/accessories" style={linkStyle}>
                Accessories
              </Link>

              <Box
                sx={{
                  width: "360px",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "row",
                  m: "20px", // row to enable wrapping into columns
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ width: "150px", height: "150px", objectFit: "cover" }}
                  image={BannerImage}
                  alt="Image 1"
                />
                <CardMedia
                  component="img"
                  sx={{ width: "150px", height: "150px", objectFit: "cover" }}
                  image={BannerImage}
                  alt="Image 1"
                />
              </Box>
            </>
          )}
          {drawerType === "new" && (
            <>
              <Link to="/new-arrivals" style={linkStyle}>
                New - Arrivals
              </Link>
            </>
          )}
          {drawerType === "collection" && (
            <>
              <Link to="/collection" style={linkStyle}>
                Collection
              </Link>
            </>
          )}
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
            <Link onClick={toggleDrawer("left", true, "shop")}>SHOP</Link>
            <Link onClick={toggleDrawer("left", true, "new")}>NEW</Link>
            <Link onClick={toggleDrawer("left", true, "collection")}>
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
              sx={{ styleCart }}
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

    // Notification send in two time per day
  );
};

export default Navbar;

const styleCart = {
  Position: "absolute",
  width: "50px",
};

const linkStyle = {
  display: "block",
  padding: "20px 60px 0px 60px",
  pointerEvents: "auto",
  textDecoration: "none",
  color: "black",
};
