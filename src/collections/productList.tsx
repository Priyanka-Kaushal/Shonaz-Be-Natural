// src/components/ProductList.tsx
import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import data from "../Assets/DataFiles/data";

type Product = {
  id: number;
  productName: string;
  category: string;
  description: string;
  price: number;
  image: string[];
};

const ProductList: React.FC = () => {
  const { category } = useParams(); // e.g., 'new-arrival', 'boys', 'girls'

  const filteredProducts = data.filter((product: Product) => product.category === category);

  return (
    <>
      <Typography variant="h4" sx={{ ml: "20px", mt: "20px" }}>
        {category?.replace("-", " ").toUpperCase()}
      </Typography>

      <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2} mt={3}>
        {filteredProducts.map((product) => (
          <Card key={product.id} sx={{ width: 280 }}>
            <CardActionArea component={Link} to={`/product/${product.id}`}>
              <CardMedia
                component="img"
                height="180"
                image={product.image[0]}
                alt={product.productName}
              />
              <CardContent>
                <Typography variant="h6">{product.productName}</Typography>
                <Typography variant="body2" color="text.secondary">{product.description}</Typography>
                <Typography variant="subtitle1" color="text.primary">₹{product.price}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default ProductList;
