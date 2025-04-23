import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <Box
    className="footerMainContainer"
    sx={{
      background: "#edffc0",
      position: "sticky",
      left: "0",  // No semicolon here
      bottom: "0",
      width: "100%",
      display: "flex",
      gap: 2,
      height: "11%",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px 0px 0px 0px",
      "@media (max-width: 600px)": {
        gap: 2,
        height: "auto",
        padding: "10px 0",
      },
    }}
  >
  
      {/* First Box: Links */}
      <Box
      className = 'footerSecOne'
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap", 
          fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem' },
        }}
      >
        <Typography className = 'footerSecOne'
          style={{
            color: "black",
            cursor: "pointer",
            textDecoration: "none",
            fontSize: "14px",
          }}
        >
          CONTACT
        </Typography>
        <Typography className = 'footerSecOne'
          style={{
            color: "black",
            cursor: "pointer",
            textDecoration: "none",
            fontSize: "14px",
          }}
        >
          CUSTOMER SERVICE
        </Typography>
        <Typography className = 'footerSecOne'
          style={{
            color: "black",
            cursor: "pointer",
            textDecoration: "none",
            fontSize: "14px",
          }}
        >
          ECOLOGI
        </Typography>
        <Typography className = 'footerSecOne'
          style={{
            color: "black",
            cursor: "pointer",
            textDecoration: "none",
            fontSize: "14px",
          }}
        >
          FIND STORE
        </Typography>
        <Typography className = 'footerSecOne'
          style={{
            color: "black",
            cursor: "pointer",
            textDecoration: "none",
            fontSize: "14px",
          }}
        >
          RETURNS
        </Typography>
      </Box>

      {/* Second Box: Social Links and Footer Info */}
      <Box
        className="secFootersec footerSecOne"
        sx={{
          position: "static",
          bottom: 0,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 2,
          backgroundColor: "white",
          boxShadow: "none",
          flexDirection: {
            xs: "column", // For smaller screens, stack items vertically
            sm: "row", // For larger screens, use row layout
          },
          gap: 2,
        }}
      >
        {/* Social Links */}
        <Box  
        className="secFootersec footerSecOne"
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: {
              xs: "center", 
              sm: "flex-start",
            },
            flexWrap: "wrap", // Wrap links in smaller screens
          }}
        >
          <a
          className="secFootersec footerSecOne"
            href="https://www.facebook.com/shonazBeNatural/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "black",
              cursor: "pointer",
              textDecoration: "none",
              fontSize: "14px",
            }}
          >
            FACEBOOK
          </a>
          <a
          className="secFootersec footerSecOne"
            href="https://www.instagram.com/shonazbenatural/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "black",
              cursor: "pointer",
              textDecoration: "none",
              fontSize: "14px",
            }}
          >
            INSTAGRAM
          </a>
          <a 
          className="secFootersec footerSecOne"
            href="https://www.amazon.in/SHONAZ-BENATURAL-Organic-Cotton-Natural/dp/B0CQVCBRBT"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "black",
              cursor: "pointer",
              textDecoration: "none",
              fontSize: "14px",
            }}
          >
            AMAZON
          </a>
        </Box>

        {/* Copyright Info */}
        <Link
          to="/"
          className="secFootersec footerSecOne"
          style={{
            color: "black",
            cursor: "pointer",
            textDecoration: "none",
            fontSize: "14px",
          }}
        >
          © 2024 Copyright: All Rights Reserved.
        </Link>

        {/* Privacy and Terms */}
        <Box
        className="secFootersec footerSecOne"
          sx={{
            display: "flex",
            gap: 2,
            paddingInline: 4,
            justifyContent: {
              xs: "center", // Center on smaller screens
              sm: "flex-end",
            },
            flexWrap: "wrap", // Wrap links for smaller screens
          }}
        >
          <Link
          className="secFootersec footerSecOne"
            to="/terms-of-service"
            style={{
              color: "black",
              cursor: "pointer",
              textDecoration: "none",
              fontSize: "14px",
            }}
          >
            PRIVACY POLICY
          </Link>
          <Link
            to="/privacy-policy"
            
            style={{
              color: "black",
              cursor: "pointer",
              textDecoration: "none",
              fontSize: "14px",
            }}
          >
            TERMS OF USE
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default FooterComponent;
