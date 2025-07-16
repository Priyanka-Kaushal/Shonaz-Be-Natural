import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Select,
  MenuItem,
  Divider,
  FormHelperText,
  TextField
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const navigate = useNavigate();
 const [products, setProducts] = useState<any[]>([]);
 
  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem("cartItems");
    return stored ? JSON.parse(stored) : [];
  });

  const handleQuantityChange = (e, prodId) => {
    const updatedItems = cartItems.map((prod) => {
      if (prod._id === prodId) {
        const selectedQty = parseInt(e.target.value);
        if (selectedQty > prod.available) {
          return {
            ...prod,
            quantity: prod.available,
            error: `Sorry, only ${prod.available} available.`,
          };
        } else {
          return { ...prod, quantity: selectedQty, error: "" };
        }
      }
      return prod;
    });

    setCartItems(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  };

  const handleRemove = (prodId) => {
    const updated = cartItems.filter((prod) => prod._id !== prodId);
    setCartItems(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
  };

  const subtotal = cartItems.reduce((sum, prod) => sum + prod.price * prod.quantity, 0);
  const vat = 8;
  const total = subtotal + vat;

  const addToCheckout = () => {
    navigate("");
  };

  return (
    <Box sx={{ p: 4 }}>
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: 6,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Your cart total is ₹{total.toFixed(2)}
        </Typography>
        <Button
          variant="contained"
          color="success"
          sx={{ width: "30%", mt: 1 }}
          onClick={addToCheckout}
        >
          Check Out
        </Button>
      </Box>

      <Typography variant="h5" mb={3}>
        Shopping Cart
      </Typography>

      <TableContainer>
        <Table>
          <TableBody>
            {cartItems.map((product) => (
              <TableRow key={product._id}>
                <TableCell sx={{ width: "150px" }}>
                  <img
                    src={product.image}
                    alt={product.title}
                    width={150}
                    height={150}
                    style={{ borderRadius: 8, objectFit: "cover" }}
                    onError={(e) => (e.currentTarget.src = "/default.jpg")}
                  />
                </TableCell>

                <TableCell>
                  <Typography variant="subtitle1">{product.title}</Typography>
                  <Typography variant="body2">Size: {product.sizes || "N/A"}</Typography>
                  <Box mt={1}>
                    <Typography variant="body2">📦 Order today.</Typography>
                    <Typography variant="body2">
                      🚚 Delivery by {product.deliveryDate || "in 7 days"}
                    </Typography>

                    <Typography variant="body2" mb={1}>
                      📦 Available Stock:{product.available}
                    </Typography>

                    <Typography variant="body2" mb={1}>
                      🛒 Selected Quantity: {product.quantity}
                    </Typography>

                  </Box>
                </TableCell>
                <TableCell>
                  <TextField
                    label="Quantity"
                    name="quantity"
                    type="number"
                    value={product.quantity}
                    onChange={(e) => handleQuantityChange(e, product._id)}
                    sx={{ width: 80 }}
                    error={!!product.error}
                    inputProps={{ min: 1, max: product.available }}
                  />
                  {product.error && (
                    <FormHelperText error>{product.error}</FormHelperText>
                  )}
                </TableCell>


                <TableCell align="left">
                  <Typography>₹{product.price.toFixed(2)}</Typography>
                  <Button color="error" onClick={() => handleRemove(product._id)}>
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box
        sx={{
          ml: "auto",
          mt: 6,
          p: 3,
          border: "1px solid #ddd",
          borderRadius: 2,
          backgroundColor: "#f9f9f9",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Order Summary
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Typography>Subtotal</Typography>
          <Typography>₹{subtotal.toFixed(2)}</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Typography>Shipping</Typography>
          <Typography>Free</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Typography>VAT</Typography>
          <Typography>₹{vat.toFixed(2)}</Typography>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
          <Button
            variant="contained"
            color="success"
            sx={{ width: "30%" }}
            onClick={addToCheckout}
          >
            Check Out
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CartPage;
