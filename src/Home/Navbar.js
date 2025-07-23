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
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import BannerImage from "../Assets/Images/weed2.jpg";
import logo from "../Assets/Images/mainlogo.png";
import SearchPage from "../Layouts/SearchPage";

const Navbar = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [openSearchModal, setOpenSearchModal] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openDrawer, setOpenDrawer] = useState({ left: false, right: false });
  const [drawerType, setDrawerType] = useState(null);
  const theme = useTheme();

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
        width: 500,
        textAlign: "center",
        padding: "60px 0",
        height: "100%",
        backgroundColor: theme.palette.background.default,
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
          <Typography
            sx={{
              mb: 1,
              fontWeight: "bold",
              color: theme.palette.primary.main,
            }}
          >
            Your Cart Is Empty
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: theme.palette.primary.dark,
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
              <Typography
   variant="h6"
    sx={{
      color: theme.palette.primary.main,
      fontWeight: 600,
      '&:hover': {
        color: theme.palette.primary.dark,
        textDecoration: 'underline',
      },
    }}
  >
                 Indian Western Wear
              </Typography>
                
              </Link>
              <Link to="/collection/sleepwear" style={linkStyle}>
                <Typography
    variant="h6"
    sx={{
      color: theme.palette.primary.main,
      fontWeight: 600,
      '&:hover': {
        color: theme.palette.primary.dark,
        textDecoration: 'underline',
      },
    }}
  >
                 sleepwear
              </Typography>
              </Link>

              <Link to="/collection/ethnic-wear" style={linkStyle}>
              <Typography
     variant="h6"
    sx={{
      color: theme.palette.primary.main,
      fontWeight: 600,
      '&:hover': {
        color: theme.palette.primary.dark,
        textDecoration: 'underline',
      },
    }}
  >
                Ethnic Wear
              </Typography>
              </Link>

              <Link to="/collection/accessories" style={linkStyle}>
               <Typography
variant="h6"
    sx={{
      color: theme.palette.primary.main,
      fontWeight: 600,
      '&:hover': {
        color: theme.palette.primary.dark,
        textDecoration: 'underline',
      },
    }}
  >
                 accessories
              </Typography>
              </Link>
              <Link to="/collection/popular-products" style={linkStyle}>
                <Typography
   variant="h6"
    sx={{
      color: theme.palette.primary.main,
      fontWeight: 600,
      '&:hover': {
        color: theme.palette.primary.dark,
        textDecoration: 'underline',
      },
    }}
  >
                 Popular dresses
              </Typography>
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
              <Typography
    variant="h6"
    sx={{
      color: theme.palette.primary.main,
      fontWeight: 600,
      '&:hover': {
        color: theme.palette.primary.dark,
        textDecoration: 'underline',
      },
    }}
  >  New - Arrivals </Typography>
             
            </Link>
          )}
          {drawerType === "collection" && (
            <Link to="/collection" style={linkStyle}>
              <Typography
    variant="h6"
    sx={{
      color: theme.palette.primary.main,
      fontWeight: 600,
      '&:hover': {
        color: theme.palette.primary.dark,
        textDecoration: 'underline',
      },
    }}
  >  Collection </Typography>
             
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
      <Link to="/collection" style={linkStyle}>
  Collection
</Link>

    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          width: "100%",
          bgcolor: "#f5f5f5",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(0,0,0,0.1)",
          zIndex: theme.zIndex.appBar,
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 2,
              color: theme.palette.primary.main,
            }}
          >
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
            <Link to="/" style={{ textDecoration: "none" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <CardMedia
                  component="img"
                  image={logo}
                  sx={{
                    width: "800px",
                    height: "70px",
                    objectFit: "contain",
                  }}
                  alt="Shonaz Logo"
                />
              </Box>
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

// import React, { useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   IconButton,
//   Typography,
//   Box,
//   Button,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   CardMedia,
//   useMediaQuery,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import { useTheme } from "@mui/material/styles";
// import BannerImage from "../Assets/Images/weed2.jpg";
// import logo from "../Assets/Images/mainlogo.png";

// const Navbar = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));
//   const [drawerState, setDrawerState] = useState({
//     left: false,
//   });

//   const toggleDrawer = (anchor, open, page = "") => (event) => {
//     if (
//       event.type === "keydown" &&
//       (event.key === "Tab" || event.key === "Shift")
//     ) {
//       return;
//     }
//     setDrawerState({ ...drawerState, [anchor]: open });
//   };

//   const drawerList = (
//     <Box
//       sx={{
//         width: 250,
//         pt: 2,
//         px: 2,
//         bgcolor: theme.palette.background.default,
//         height: "100%",
//       }}
//       role="presentation"
//       onClick={toggleDrawer("left", false)}
//       onKeyDown={toggleDrawer("left", false)}
//     >
//       <Box display="flex" justifyContent="space-between" alignItems="center">
//         <Typography
//           variant="h6"
//           sx={{ color: theme.palette.primary.main, fontWeight: "bold" }}
//         >
//           Menu
//         </Typography>
//         <IconButton onClick={toggleDrawer("left", false)}>
//           <CloseIcon />
//         </IconButton>
//       </Box>
//       <List>
//         {["Home", "Shop", "About", "Contact"].map((text) => (
//           <ListItem button key={text}>
//             <ListItemText
//               primary={text}
//               sx={{ color: theme.palette.text.primary }}
//             />
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <AppBar
//       position="fixed"
//       elevation={0}
//       sx={{
//         width: "100%",
//         bgcolor: theme.palette.background.default,
//         borderBottom: `1px solid ${theme.palette.divider}`,
//         backdropFilter: "blur(10px)",
//         zIndex: theme.zIndex.appBar,
//       }}
//     >
//       <Toolbar
//         sx={{
//           justifyContent: "space-between",
//           px: theme.spacing(3),
//           py: theme.spacing(1),
//         }}
//       >

//         <Box sx={{ display: "flex", alignItems: "center" }}>
//           <CardMedia
//             component="img"
//             image={logo}
//             alt="Logo"
//             sx={{
//               width: {
//                 xs: "150px",
//                 sm: "300px",
//                 md: "500px",
//                 lg: "600px",
//               },
//               height: "80px",
//               objectFit: "contain",
//             }}
//           />
//         </Box>

//         {isMobile ? (
//           <>
//             <IconButton
//               edge="start"
//               color="inherit"
//               onClick={toggleDrawer("left", true)}
//             >
//               <MenuIcon />
//             </IconButton>
//             <Drawer
//               anchor="left"
//               open={drawerState.left}
//               onClose={toggleDrawer("left", false)}
//             >
//               {drawerList}
//             </Drawer>
//           </>
//         ) : (
//           <Box display="flex" alignItems="center" gap={3}>
//             {["Home", "Shop", "About", "Contact"].map((text) => (
//               <Typography
//                 key={text}
//                 sx={{
//                   cursor: "pointer",
//                   fontWeight: theme.typography.fontWeightMedium,
//                   color: theme.palette.text.primary,
//                   transition: "color 0.2s",
//                   "&:hover": {
//                     color: theme.palette.primary.main,
//                   },
//                 }}
//               >
//                 {text}
//               </Typography>
//             ))}
//             <Button
//               variant="contained"
//               startIcon={<ShoppingCartIcon />}
//               sx={{
//                 bgcolor: theme.palette.primary.main,
//                 color: theme.palette.common.white,
//                 px: theme.spacing(2),
//                 py: theme.spacing(1),
//                 fontWeight: 600,
//                 boxShadow: theme.shadows[3],
//                 "&:hover": {
//                   bgcolor: theme.palette.primary.dark,
//                   boxShadow: theme.shadows[6],
//                 },
//               }}
//             >
//               Cart
//             </Button>
//           </Box>
//         )}
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;
