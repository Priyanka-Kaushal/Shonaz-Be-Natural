import React from "react";
import { Box, Typography, CardMedia, Link } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import BannerImage from "../Assets/Images/BannerImage.jpg";


const FlexBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  gap: theme.spacing(4),
  width: "100%",
  margin: "50px 80px 50px 80px", 
  [theme.breakpoints.down("md")]: {
    margin: "50px 60px", 
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column", 
    margin: "30px 20px", 
    textAlign: "center",
  },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "33%",
  height: "400px",
  [theme.breakpoints.down("sm")]: {
    width: "80%", 
    height: "300px",
  },
}));

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

    
      <TextContainer>
  <Typography
    variant="h4"
    sx={{
      fontWeight: "bold",
      pl: '40px',
      mb: 1,
      letterSpacing: "0.5px",
    }}
  >
    Introducing Shonaz
  </Typography>

  <Typography
    variant="body1"
    sx={{
      lineHeight: 1.7,
      pl: '40px',
      pr: '40px',
      mb: 2,
      maxWidth: "700px",
    }}
  >
    Shonaz is your ultimate destination for premium products that bring style and convenience to your life. Explore our exclusive collection designed to inspire and elevate your daily experience.
  </Typography>

  <Link
    onClick={() => navigate("/collection")}
    sx={{
      color: "#000",
      textDecoration: "underline",
      fontWeight: "bold",
      fontSize: "16px",
      cursor: "pointer",
      pl: '40px',
      "&:hover": {
        color: "#2e7d32", 
        textDecoration: "none",
      },
    }}
  >
    DISCOVER THE COLLECTION
  </Link>
</TextContainer>

    </FlexBox>
  );
};

export default IntroductionPage;
