import React from "react";
import { Container, Box, Typography } from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>
        Privacy Policy
      </Typography>

      <Box sx={{ lineHeight: 1.7 }}>
        <p><strong>Last updated:</strong> March 26, 2025</p>

        <h3>Who we are</h3>
        <p>Our website address is: <a href="https://shonaz.in">https://shonaz.in</a>.</p>

        <h3>Comments</h3>
        <p>When visitors leave comments on the site we collect the data shown in the comments form, along with the visitor's IP address and browser user agent string to help with spam detection.</p>

        <h3>Media</h3>
        <p>If you upload images to the website, avoid including embedded location data (EXIF GPS). Visitors can download and extract location data from images on the website.</p>

        <h3>Cookies</h3>
        <p>We use cookies to enhance user experience. Login cookies last for two days, and screen options cookies last for a year.</p>

        <h3>Embedded content from other websites</h3>
        <p>Articles on this site may include embedded content (e.g., videos, images). Embedded content behaves the same as if the visitor has visited the other website.</p>

        <h3>Who we share your data with</h3>
        <p>If you request a password reset, your IP address will be included in the reset email.</p>

        <h3>How long we retain your data</h3>
        <p>Comments and metadata are retained indefinitely for recognition and moderation purposes.</p>

        <h3>What rights you have over your data</h3>
        <p>If you have an account or have left comments, you can request an exported file of your personal data or request its deletion.</p>

        <h3>Where your data is sent</h3>
        <p>Visitor comments may be checked through an automated spam detection service.</p>
      </Box>
    </Container>
  );
};

export default PrivacyPolicy;
