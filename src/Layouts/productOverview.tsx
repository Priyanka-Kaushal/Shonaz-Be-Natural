import { Box, Typography, Button } from "@mui/material";
import React from 'react';
import { useNavigate } from "react-router-dom";

interface ProductOverviewProps {
  product: any;
  onClose: () => void;
}

const ProductOverview: React.FC<ProductOverviewProps> = ({ product, onClose }) => {
  const navigate = useNavigate();

  if (!product) return null;

  const AddToCartProduct = () => {
    onClose();
    navigate("/view-cart");
  };

  return (
    <Box sx={{ position: 'relative', display: 'flex', gap: 4, p: 4 }}>
      <Box sx={{ flex: 1 }}>
        <img
          src={product.image}
          alt={product.title}
          style={{
            width: "100%",
            maxHeight: "500px",
            objectFit: "contain",
            borderRadius: "8px",
          }}
        />
      </Box>

      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Box>
          <Typography variant="h5" fontWeight="bold" mb={2}>
            {product.title}
          </Typography>
          <Typography variant="h6" mb={1}>Price: ₹{product.price}</Typography>
          <Typography variant="body1" mb={1}>Color: {product.color}</Typography>
          <Typography variant="body1" mb={1}>Size: {product.size}</Typography>
          <Typography variant="body2" color="text.secondary" mb={1}>Rating: {product.rating} ⭐</Typography>
          <Typography variant="body1" mb={3}>Quantity: {product.quantity}</Typography>
        </Box>

        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#000",
            color: "#fff",
            mt: 3,
            ":hover": { backgroundColor: "#333" },
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
