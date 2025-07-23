import axios from "axios";
import {
  Box,
  Card,
  CardMedia,
  Typography,
  useTheme,
  Button,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import LazyLoad from "react-lazyload";
import { useState, useEffect } from "react";

const Gallery = () => {
  
   const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(
          "http://localhost:4000/api/category/selectedCategory"
        );
        if (res.data.success) {
          setCategories(res.data.categories);
        } else {
          console.error("API responded with success=false");
        }
      } catch (error) {
        console.error("Failed to fetch categories", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return (
      <Typography variant="h6" align="center" mt={4}>
        Loading categories...
      </Typography>
    );
  }

  const handleShopNow = (slug) => {
    navigate(`/collection/${slug}`);
  };




  return (
    <Box
      className="section-gallery-products"
      sx={{
        backgroundColor: theme.palette.background.default,
        py: { xs: 4, md: 6 },
        px: { xs: 2, md: 10 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4,
        }}
      >
        {categories.slice(0, 4).map((category, index) => (
          <Box
            key={category._id || index}
            onClick={() => handleShopNow(category.slug)}
            sx={{
              width: { xs: "100%", sm: "48%", md: "45%" },
              cursor: "pointer",
            }}
          >
            <Card
              sx={{
                width: "100%",
                height: { xs: 250, sm: 350, md: 500 },
                position: "relative",
                 borderRadius: theme.shape.borderRadius,
                overflow: "hidden",
                boxShadow: theme.shadows[3],
                "&:hover": {
                  boxShadow: theme.shadows[6],
                },
              }}
            >
              <LazyLoad
                height={500}
                offset={100}
                once
                placeholder={
                  <Box
                    sx={{
                      height: "100%",
                      backgroundColor: "#f0f0f0",
                    }}
                  />
                }
              >
                <CardMedia
                  component="img"
                  image={category.image}
                  alt={category.categoryname}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top center",
                  }}
                />
              </LazyLoad>

              <Box
                sx={{
                  position: "absolute",
                  bottom: 20,
                  left: 30,
                  color: "#fff",
                  zIndex: 2,
                  padding: theme.spacing(2),
                  borderRadius: theme.shape.borderRadius,
                }}
              >
                <Typography variant="h5" fontWeight="bold">
                  {category.categoryname}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 1 }}
                  onClick={(event) => {
                    event.stopPropagation();
                    handleShopNow(category.slug);
                  }}
                >
                  Shop Now
                </Button>
              </Box>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Gallery;
