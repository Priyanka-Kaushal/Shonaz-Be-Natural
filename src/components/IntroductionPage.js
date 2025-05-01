import React from "react";
import { Box, Typography, CardMedia, Link } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import BannerImage from "../Assets/Images/BannerImage.jpg";


// Reusable Styled Components for Flexbox Layout with Custom Margins
const FlexBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  gap: theme.spacing(4),
  width: "100%",
  margin: "50px 80px 50px 80px", // Top, Right, Bottom, Left margin
  [theme.breakpoints.down("md")]: {
    margin: "50px 60px", // Less margin for medium screens
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column", // Stack elements on small screens
    margin: "30px 20px", // Compact margins for small screens
    textAlign: "center",
  },
}));

// Styled Container for Image Section
const ImageContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "33%",
  height: "400px",
  [theme.breakpoints.down("sm")]: {
    width: "80%", 
    height: "300px",
  },
}));

// Styled Text Section
const TextContainer = styled(Box)(({ theme }) => ({
  width: "40%",
  textAlign: "left",
  [theme.breakpoints.down("sm")]: {
    width: "90%",
    textAlign: "center",
  },
}));

const IntroductionPage = () => {
  const navigate = useNavigate();

  return (
    <FlexBox>
      {/* Overlapping Images */}
      <ImageContainer>
        <CardMedia
          component="img"
          sx={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            borderRadius: "8px",
          }}
          image={BannerImage}
          alt="Product Image"
        />
        <CardMedia
          component="img"
          sx={{
            pl: '40px',
            height: "70%",
            width: "60%",
            position: "absolute",
            top: "15%",
            left: "-20%",
            zIndex: 2,
            borderRadius: "8px",
            border: "3px solid white",
          }}
          image={BannerImage}
          alt="Product Image"
        />
      </ImageContainer>

      {/* Text Section */}
      <TextContainer>
        <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold",  pl: '40px' }}>
          Introducing Shonaz
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.6, color: "#555", mb: 3 }}>
          Shonaz is your ultimate destination for premium products that bring
          style and convenience to your life. Explore our exclusive collection
          designed to inspire and elevate your daily experience.
        </Typography>

        <Link
          onClick={() => navigate("/SHOPACCESSORIES")}
          sx={{
            color: "black",
            textDecoration: "underline",
            fontWeight: "bold",
            fontSize: "16px",
            cursor: "pointer",
            "&:hover": { color: "gray" },
          }}
        >
          DISCOVER THE COLLECTION
        </Link>
      </TextContainer>
    </FlexBox>
  );
};

export default IntroductionPage;
