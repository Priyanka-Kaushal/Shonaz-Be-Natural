import axios from "axios";
import { Box, Card, CardMedia, Typography, useTheme, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LazyLoad from "react-lazyload";
import { useState } from "react";
import { useEffect } from "react";


const Gallery = () => {
  const theme = useTheme();
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
    return <div>Loading categories...</div>;
  }

  const handleShopNow = (slug) => {
    navigate(`/collection/${slug}`);
  };

  return (
    <Box className="section-gallery-products">
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          width: "80%",
          height: "100%",
          mt: 10,
          mr: 20,
          mb: 10,
          ml: 20,
          padding: 0,
          justifyContent: "center",
        }}
      >
        {categories.slice(0, 4).map((category, categoryItem) => (
          <Box
            key={category._id || categoryItem}
            onClick={() => handleShopNow(category.slug)}
            sx={{
              width: "50%",
              height: "80%",
              padding: 0,
              margin: 0,
              cursor: "pointer",
            }}
          >
            <Card
              sx={{
                width: "100%",
                height: { xs: 300, sm: 400, md: 500 },
                position: "relative",
                borderRadius: 0,
                boxShadow: "none",
              }}
            >
              <LazyLoad
                height={500} 
                offset={100}  
                once          
                placeholder={<div style={{ height: 500, backgroundColor: "#f0f0f0" }} />} 
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
