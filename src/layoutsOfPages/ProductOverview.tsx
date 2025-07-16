import { Box, Typography, Button } from "@mui/material";
import React from 'react';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface ProductOverviewProps {
  product: any;
  onClose: () => void;
}

const ProductOverview: React.FC<ProductOverviewProps> = ({ product, onClose }) => {
const navigate = useNavigate();

  const AddToCartProduct = () => {
    const stored = JSON.parse(localStorage.getItem("cartItems")) || [];

    const existingIndex = stored.findIndex((item) => item._id === product._id);

    if (existingIndex > -1) {
      const existingProduct = stored[existingIndex];
      if (existingProduct.quantity < product.available) {
        existingProduct.quantity += 1;
      }
    } else {
      stored.push({
        _id: product._id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity: 1,
        available: product.available,
        sizes: product.sizes?.[0] || "N/A",
        deliveryDate: product.deliveryDate || "in 7 days",
        error: "",
      });
    }

    localStorage.setItem("cartItems", JSON.stringify(stored));
    navigate("/view-cart");
  };


  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 4,
        p: 4,
        height: { md: "500px", xs: "auto" },
        maxWidth: "60%",
        margin: "auto"
      }}
    >

      <Box
        sx={{
          flex: 1,
          height: "120%",
          display: "flex",
          mt: "10px",
          mb: "10px",
          mr: "20px",
          ml: "20px",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f8f8f8",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <img
          src={product.image}
          alt={product.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </Box>

    
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography variant="h5" fontWeight="bold" mb={2}>
            {product.title}
          </Typography>
          <Typography variant="h6" mb={1}>
            Price: ₹{product.price}
          </Typography>
          <Typography variant="body1" mb={1}>
            Color: {Array.isArray(product.colors) ? product.colors.join(", ") : product.colors}
          </Typography>
          <Typography variant="body1" mb={1}>
            Size: {Array.isArray(product.sizes) ? product.sizes.join(", ") : product.sizes}
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={1}>
            Rating: {product.rating || "4.5"} ⭐
          </Typography>
          <Typography variant="body1" mb={2}>
            Quantity: {product.quantity}
          </Typography>
        </Box>

        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#000",
            color: "#fff",
            mt: 3,
            ":hover": { backgroundColor: "#333" },
            borderRadius: "8px",
            padding: "10px",
            fontSize: "14px",
          }}
          onClick={AddToCartProduct}
        >
          Add to Cart
        </Button>
      </Box>
    </Box>
  );
};

export default ProductOverview;
