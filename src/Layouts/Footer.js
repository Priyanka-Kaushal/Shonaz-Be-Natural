import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      className="footerMainContainer"
      sx={{
        background: "pink",
        position: "static",
        bottom: 40,
        width: "100%",
        display: "flex",
        gap: 2,
        height: "15%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 2,
          justifycontent: "center",
          alignItems: "center",
        }}
      >
        {/* <TextField placeholder="Email" fullWidth sx={{ mb: 1 }} /> */}

        <Typography
          style={{
            color: "black",
            cursor: "pointer",
            textDecoration: "none",
            fontSize: "14px",
          }}
        >
          CONTACT
        </Typography>
        <Typography
          style={{
            color: "black",
            cursor: "pointer",
            textDecoration: "none",
            fontSize: "14px",
          }}
        >
          CUSTOMER SERVICE{" "}
        </Typography>
        <Typography
          style={{
            color: "black",
            cursor: "pointer",
            textDecoration: "none",
            fontSize: "14px",
          }}
        >
          ECOLOGI
        </Typography>
        <Typography
          style={{
            color: "black",
            cursor: "pointer",
            textDecoration: "none",
            fontSize: "14px",
          }}
        >
          FIND STORE
        </Typography>
        <Typography
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

      <Box
        className="secondContatiner"
        sx={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 2,
          backgroundColor: "transparent",
          boxShadow: "none",
        }}
      >
        <Box sx={{ display: "flex", gap: 2 }}>
          <a
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

        <Link
        to="/"
          style={{
            color: "black",
            cursor: "pointer",
            textDecoration: "none",
            fontSize: "14px",
          }}
        >
          © 2024 Copyright: All Rights Reserved.
        </Link>

        <Box sx={{ display: "flex", gap: 2, paddingInline: 4 }}>
          <Link
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

export default Footer;
