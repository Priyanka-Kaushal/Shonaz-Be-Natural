import { Box, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        fontFamily: theme.typography.fontFamily,
        fontSize: "14px",
        borderTop: "1px solid #ccc",
        zIndex: 1000,
        pt: 2,
      }}
    >
      {/* Top Links */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 2,
          px: 2,
          mb: 1,
        }}
      >

        <Link to="/privacy-policy" style={{ color: "black", textDecoration: "none", fontSize: "14px" }}>
           RETURNS
          </Link>
          <Link to="/contact-page" style={{ color: "black", textDecoration: "none", fontSize: "14px" }}>
            CONTACT
          </Link>
          <Link to="/Shipping-Deliveries-Policy" style={{ color: "black", textDecoration: "none", fontSize: "14px" }}>
            SHIPPING POLICY
          </Link>
      </Box>

      {/* Bottom Section */}
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
          px: 2,
          py: 1,
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        {/* Social Links */}
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", justifyContent: { xs: "center", sm: "flex-start" } }}>
          {[
            { label: "FACEBOOK", url: "https://www.facebook.com/shonazBeNatural/" },
            { label: "INSTAGRAM", url: "https://www.instagram.com/shonazbenatural/" },
            { label: "AMAZON", url: "https://www.amazon.in/SHONAZ-BENATURAL-Organic-Cotton-Natural/dp/B0CQVCBRBT" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "black",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              {item.label}
            </a>
          ))}
        </Box>

        {/* Copyright */}
        <Typography sx={{ fontSize: "14px" }}>
          © 2024 Copyright: All Rights Reserved.
        </Typography>

        {/* Policy Links */}
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", justifyContent: { xs: "center", sm: "flex-end" } }}>
          <Link to="/privacy-policy" style={{ color: "black", textDecoration: "none", fontSize: "14px" }}>
            PRIVACY POLICY
          </Link>
          <Link to="/Terms-Of-Service" style={{ color: "black", textDecoration: "none", fontSize: "14px" }}>
            TERMS OF USE
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default FooterComponent;
