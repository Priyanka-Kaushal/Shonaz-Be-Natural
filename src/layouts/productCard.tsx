import React from "react";
import "../styles/shoppingCart.css";
import { Link } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Box,
} from "@mui/material";


interface ProductCardProps {
    productsDescription: any[]; // You can replace `any` with a proper product type if available
  }
  
  const ProductCard: React.FC<ProductCardProps> = ({ productsDescription }) => {
    if (!productsDescription || productsDescription.length === 0) {
      return <Typography textAlign="center">No products found</Typography>;
    }
  
    return (
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        gap="2px"
        padding="5px"
        maxWidth="80%"
        marginInline="auto"
      >
        {productsDescription.map((product) => (
          <Link
            to={`/product/${product.id}`}
            style={{ textDecoration: "none" }}
            key={product.id}
          >
            <Card sx={{ maxWidth: 345, margin: "20px auto" }}>
              <Typography variant="h6" gutterBottom>
                {product.category}
              </Typography>
              <CardMedia
                component="img"
                height="200"
                image={product.image[0]}
                alt={product.productName}
              />
              <CardContent>
                <Typography variant="h5">{product.productName}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                <Typography variant="body1" color="text.primary">
                  Price: ₹{product.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Rating: {product.rating}
                </Typography>
              </CardContent>
              <CardActions>
                <Typography variant="button" color="primary">
                  View Details
                </Typography>
              </CardActions>
            </Card>
          </Link>
        ))}
      </Box>
    );
  };
  
  export default ProductCard;
  