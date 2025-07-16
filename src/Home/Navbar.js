import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Drawer,
  Button,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  CardMedia,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import BannerImage from "../Assets/Images/weed2.jpg";
import SearchPage from "../Layouts/SearchPage";

const Navbar = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [openSearchModal, setOpenSearchModal] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openDrawer, setOpenDrawer] = useState({ left: false, right: false });
  const [drawerType, setDrawerType] = useState(null);

  const navigate = useNavigate();

  const handleStartShopping = () => {
    navigate("/shop/new-arrivals");
  };

  const toggleDrawer =
    (anchor, open, type = null) =>
    (event) => {
      if (
        event?.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      )
        return;
      setDrawerType(type);
      setOpenDrawer({ ...openDrawer, [anchor]: open });
    };

  const toggleMobileMenu = (state) => () => {
    setMobileMenu(state);
  };

  const handleOpenSearchModal = () => setOpenSearchModal(true);
  const handleCloseSearchModal = () => setOpenSearchModal(false);

  const DrawerList = (anchor) => (
    <Box
      className="leftDrawerMenu rightdrawerCheckOut"
      sx={{
        width: 400,
        textAlign: "center",
        padding: "60px 0",
        height: "100%",
        backgroundColor: "rgba(255,255,255,0.8)",
        backdropFilter: "blur(6px)",
        zIndex: 900,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {anchor === "right" ? (
        <>
          <Typography sx={{ mb: 1, fontWeight: "bold" }}>
            Your Cart Is Empty
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "black",
              color: "white",
              paddingX: 3,
              "&:hover": {
                backgroundColor: "#333",
              },
            }}
            onClick={handleStartShopping}
          >
            START SHOPPING
          </Button>
        </>
      ) : (
        <>
          {drawerType === "shop" && (
            <>
              <Link to="/collection/indian-western" style={linkStyle}>
                Indian Western Wear
              </Link>
              <Link to="/collection/sleepwear" style={linkStyle}>
                Sleepwear
              </Link>

              <Link to="/collection/ethnic-wear" style={linkStyle}>
                Ethnic Wear
              </Link>
              <Link to="/collectionsleepwear" style={linkStyle}>
                Sleepwear
              </Link>
              <Link to="/collection/accessories" style={linkStyle}>
                Accessories
              </Link>
              <Link to="/collection/popular-products" style={linkStyle}>
                Popular Products
              </Link>

              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ width: "150px", height: "150px" }}
                  image={BannerImage}
                />
                <CardMedia
                  component="img"
                  sx={{ width: "150px", height: "150px" }}
                  image={BannerImage}
                />
              </Box>
            </>
          )}
          {drawerType === "new" && (
            <Link to="/collection/new-arrivals" style={linkStyle}>
              New - Arrivals
            </Link>
          )}
          {drawerType === "collection" && (
            <Link to="/collection/collection" style={linkStyle}>
              Collection
            </Link>
          )}
        </>
      )}
    </Box>
  );

  const MobileMenu = (
    <Box className="menuForMobile" sx={{ padding: 2 }}>
      <Link to="/shop" style={linkStyle}>
        SHOP
      </Link>
      <Link to="/collection/new-arrivals" style={linkStyle}>
        NEW
      </Link>
      <Link to="collection/collection" style={linkStyle}>
        COLLECTION
      </Link>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "white", boxShadow: "none", zIndex: 1201 }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            <Link
              onClick={toggleDrawer("left", true, "shop")}
              style={headerLink}
            >
              SHOP
            </Link>
            <Link
              onClick={toggleDrawer("left", true, "new")}
              style={headerLink}
            >
              NEW
            </Link>
            <Link
              onClick={toggleDrawer("left", true, "collection")}
              style={headerLink}
            >
              COLLECTION
            </Link>
          </Box>

          <IconButton
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={toggleMobileMenu(true)}
          >
            <MenuIcon />
          </IconButton>

          <Box>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                fontWeight: "bold",
                color: "black",
                fontSize: "20px",
              }}
            >
              SHONAZ BE NATURAL
            </Link>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Button
              onClick={handleOpenSearchModal}
              sx={{
                minWidth: "unset",
                color: "black",
                fontWeight: "bold",
                fontSize: "14px",
                textTransform: "none",
                padding: 0,
              }}
            >
              {isMobile ? <SearchIcon sx={{ color: "black" }} /> : "Search"}
            </Button>

            {!isMobile && (
              <Link to="/account/login" style={headerLink}>
                ACCOUNT
              </Link>
            )}

            <Link onClick={toggleDrawer("right", true)} style={headerLink}>
              CART
            </Link>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={openDrawer.left}
        onClose={toggleDrawer("left", false)}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            backgroundColor: "rgba(255,255,255,0.8)",
            backdropFilter: "blur(5px)",
            zIndex: 900,
          },
        }}
      >
        {DrawerList("left")}
      </Drawer>

      <Drawer
        anchor="right"
        open={openDrawer.right}
        onClose={toggleDrawer("right", false)}
        PaperProps={{
          sx: {
            backgroundColor: "rgba(255,255,255,0.8)",
            backdropFilter: "blur(5px)",
            zIndex: 900,
          },
        }}
      >
        {DrawerList("right")}
      </Drawer>

      <Drawer anchor="left" open={mobileMenu} onClose={toggleMobileMenu(false)}>
        {MobileMenu}
      </Drawer>
      <SearchPage open={openSearchModal} handleClose={handleCloseSearchModal} />
    </Box>
  );
};

export default Navbar;

const headerLink = {
  textDecoration: "none",
  color: "black",
  fontWeight: "bold",
  cursor: "pointer",
};

const linkStyle = {
  display: "block",
  padding: "20px 60px 0px 60px",
  pointerEvents: "auto",
  textDecoration: "none",
  color: "black",
};
