import React from "react";
import {
  Typography,
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";
import { Link } from "react-router-dom";
import productsDescription, { Product } from "../../Assets/DataFiles/productDescription.ts";
import Spinner from "../../Layouts/Spinner.js";
import FilterSort from "../FilterAndSorting.tsx";

console.log("productsDescription:", productsDescription);
const ProductPage: React.FC = () => {
  return (
    <Box p={3}>
      <FilterSort />
      <Box sx={{ mt: "50px" }}>
        <Typography variant="h4" gutterBottom>
          Popular Products
        </Typography>
        <Typography variant="h6" gutterBottom>
          Exclusive Selection
        </Typography>
      </Box>

      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        gap={2}
        mt={3}
      >
        {productsDescription?.map((product: Product) => (
          <Card key={product.id} sx={{ width: 280 }}>
            <CardActionArea component={Link} to={`/product/${product.id}`}>
              <CardMedia
                component="img"
                height="180"
                image={product.image[1]} // Using first image
                alt={product.productName}
              />
              <CardContent>
                <Typography variant="h6">{product.productName}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                <Typography variant="subtitle1" color="text.primary">
                  ₹{product.price}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default ProductPage;
