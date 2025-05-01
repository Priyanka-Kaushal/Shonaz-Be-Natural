import React from "react";
import { Box, Card, CardMedia, Typography, useTheme } from "@mui/material";
import BannerImage from "../Assets/Images/BannerImage.jpg";

const Gallery = () => {
  const theme = useTheme();

  const images = [
    { src: BannerImage, title: "Shop for Boys", link: "SHOPBOYS" },
    { src: BannerImage, title: "Shop for Girls", link: "SHOPGIRLS" },
    { src: BannerImage, title: "Shop Accessories", link: "SHOPACCESSORIES" },
    { src: BannerImage, title: "New Collection", link: "/shop/new-arrivals" },
  ];

  return (
    <div className="section-gallery-products">
      <Box
        sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center", // Center content horizontally
                  justifyContent: "center", 
                  gap: "20px",
                  width: "100%",
          [theme.breakpoints.up("sm")]: {
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "30px",
          },
        }}
      >
        {[0, 2].map((startIndex) => (
          <Box
            key={startIndex}
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              [theme.breakpoints.up("sm")]: {
                justifyContent: {
                  xs: "center",
                  sm: "flex-end",
                },
              },

              flexWrap: "wrap", // Wrap links for smaller screens
            }}
          >
            {images
              .slice(startIndex, startIndex + 2)
              .map((image, galleryTitle) => (
                <a
                  key={galleryTitle}
                  href={image.link}
                  style={{
                    color: "black",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "500px",
                    textDecoration: "none",
                    [theme.breakpoints.up("sm")]: {
                      width: "calc(50% - 20px)", // Adjusts width for larger screens
                    },
                  }}
                >
                  <Card style={{ position: "relative", overflow: "hidden" }}>
                    <CardMedia
                      component="img"
                      image={image.src}
                      alt={image.title}
                      sx={{
                        height: "500px",
                        width: "100%",
                        objectFit: "cover",
                        [theme.breakpoints.up("sm")]: {
                          height: "400px",
                        },
                        [theme.breakpoints.up("md")]: {
                          height: "500px",
                        },
                      }}
                    />

                    <Box
                      style={{
                        position: "absolute",
                        bottom: "20px",
                        left: "40px",
                        color: "inherit",
                        padding: "10px",
                        borderRadius: "5px",
                        zIndex: 2,
                      }}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: "bold",
                          [theme.breakpoints.up("sm")]: {
                            fontSize: "1.25rem",
                          },
                          [theme.breakpoints.up("md")]: {
                            fontSize: "1.5rem",
                          },
                        }}
                      >
                        {image.title}
                      </Typography>
                      <p
                        variant="body1"
                        style={{
                          margin: 0,
                          variant: "h2",
                          textDecoration: "underline",
                          fontSize: "0.9rem",
                          [theme.breakpoints.up("sm")]: {
                            fontSize: "1rem",
                          },
                        }}
                      >
                        Shop Now
                      </p>
                    </Box>
                  </Card>
                </a>
              ))}
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default Gallery;
