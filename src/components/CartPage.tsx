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
} from "@mui/material";
import WatchImage from "../Assets/Images/weed2.jpg";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Product Name",
      size: "Medium",
      price: 62.0,
      quantity: 1,
      image: WatchImage,
      available: 2,
      deliveryDate: "Dec 23",
      error: "",
    },
  ]);

  const handleQuantityChange = (e, itemId) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === itemId) {
        const selectedQty = parseInt(e.target.value);
        if (selectedQty > item.available) {
          return {
            ...item,
            quantity: item.available,
            error: `Sorry, only ${item.available} available.`,
          };
        } else {
          return { ...item, quantity: selectedQty, error: "" };
        }
      }
      return item;
    });
    setCartItems(updatedItems);
  };

  const handleRemove = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const vat = 8;
  const total = subtotal + vat;

  const addToCheckout = () => {
    navigate("/account/login");
  };

  return (
    <Box sx={{ p: 4 }}>
      {/* Header */}
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
          Your cart total is ${total.toFixed(2)}
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

      {/* Cart Items */}
      <Typography variant="h5" mb={3}>
        Shopping Cart
      </Typography>

      <TableContainer>
        <Table>
          <TableBody>
            {cartItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell sx={{ width: "150px" }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    width={150}
                    height={150}
                    style={{ borderRadius: 8, objectFit: "cover" }}
                  />
                </TableCell>

                <TableCell>
                  <Typography variant="subtitle1">{item.name}</Typography>
                  <Typography variant="body2">{item.size}</Typography>
                  <Box mt={1}>
                    <Typography variant="body2">📦 Order today.</Typography>
                    <Typography variant="body2">
                      🚚 Delivery by {item.deliveryDate}
                    </Typography>
                    <Typography variant="body2">
                      📦 Only {item.available} Available.
                    </Typography>
                  </Box>
                </TableCell>

                <TableCell>
                  <Select
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(e, item.id)}
                    size="small"
                    sx={{ width: 80 }}
                    error={!!item.error}
                  >
                    {[...Array(Math.min(item.available, 5)).keys()].map((i) => (
                      <MenuItem key={i + 1} value={i + 1}>
                        {i + 1}
                      </MenuItem>
                    ))}
                  </Select>
                  {item.error && (
                    <FormHelperText error>{item.error}</FormHelperText>
                  )}
                </TableCell>

                <TableCell align="left">
                  <Typography>${item.price.toFixed(2)}</Typography>
                  <Button color="error" onClick={() => handleRemove(item.id)}>
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Summary Section */}
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
          <Typography>${subtotal.toFixed(2)}</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Typography>Shipping</Typography>
          <Typography>Free</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Typography>VAT</Typography>
          <Typography>${vat.toFixed(2)}</Typography>
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
