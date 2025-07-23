import React, { useState, useImperativeHandle, forwardRef } from "react";
import {
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  FormHelperText,
  Divider,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import QuantitySelector from "../Layouts/QuantitySelector.tsx";

const CartPageItems = forwardRef(
  ({ showTotalSummary = true, hideCheckoutButton = false }, ref) => {
    const theme = useTheme();
    const navigate = useNavigate();

    const [cartItems, setCartItems] = useState(() => {
      const stored = localStorage.getItem("cartItems");
      return stored ? JSON.parse(stored) : [];
    });

    const handleQuantityChange = (productId, action) => {
      const updatedItems = cartItems.map((item) => {
        if (item._id === productId) {
          const updatedQty =
            action === "increment"
              ? Math.min(item.quantity + 1, item.available)
              : Math.max(item.quantity - 1, 1);
          return { ...item, quantity: updatedQty };
        }
        return item;
      });
      setCartItems(updatedItems);
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
    };

    const handleRemove = (prodId) => {
      const updated = cartItems.filter((prod) => prod._id !== prodId);
      setCartItems(updated);
      localStorage.setItem("cartItems", JSON.stringify(updated));
    };

    const subtotal = cartItems.reduce(
      (sum, prod) => sum + prod.price * prod.quantity,
      0
    );

    const vat = 8;
    const total = subtotal + vat;

    const addToCheckout = () => {
      localStorage.setItem("checkoutItems", JSON.stringify(cartItems));
      navigate("/checkout-form");
    };

    useImperativeHandle(ref, () => ({
      addToCheckout,
      getTotal: () => total,
    }));

    return (
      <>
        <TableContainer className="containerTable">
          <Table>
            <TableBody>
              {cartItems.map((product) => (
                <TableRow key={product._id}>
                  <TableCell>
                    <img
                      src={product.image}
                      alt={product.title}
                      width={300}
                      height={250}
                      onError={(e) => (e.currentTarget.src = "/default.jpg")}
                      style={{ objectFit: "cover", objectPosition: "top" }}
                    />
                  </TableCell>

                  <TableCell>
                    <Typography variant="h4">{product.title}</Typography>
                    <Typography variant="body1">
                      <strong>Color:</strong> {product.colors}
                    </Typography>
                    <Typography variant="body2">
                      Size: {product.sizes || "N/A"}
                    </Typography>
                    <Typography
                      color={theme.palette.primary.main}
                      variant="body2"
                      mb={1}
                    >
                      Available Stock: {product.available}
                    </Typography>
                    <Typography
                      color={theme.palette.primary.main}
                      variant="body2"
                      mb={1}
                    >
                      Selected Stock: {product.quantity}
                    </Typography>
                  </TableCell>

                  <TableCell>
                    <QuantitySelector
                      quantity={product.quantity}
                      maxQuantity={product.available}
                      onIncrement={() =>
                        handleQuantityChange(product._id, "increment")
                      }
                      onDecrement={() =>
                        handleQuantityChange(product._id, "decrement")
                      }
                    />
                    {product.error && (
                      <FormHelperText error>{product.error}</FormHelperText>
                    )}
                  </TableCell>

                  <TableCell>
                    <Typography>₹{product.price.toFixed(2)}</Typography>
                    <Button
                      variant="contained"
                      onClick={() => handleRemove(product._id)}
                      sx={{
                        color: theme.palette.primary.contrastText,
                        backgroundColor: theme.palette.error.dark,
                        textTransform: "none",
                        fontWeight: "bold",
                        "&:hover": {
                          backgroundColor: theme.palette.error.dark,
                        },
                      }}
                    >
                      Remove
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {showTotalSummary && (
          <Box sx={{ mt: 6, p: 3, border: "1px solid #ddd" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h4">Subtotal</Typography>
              <Typography variant="h6">₹{subtotal.toFixed(2)}</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h4">Shipping</Typography>
              <Typography variant="h6">Free</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h4">VAT</Typography>
              <Typography variant="h6">₹{vat.toFixed(2)}</Typography>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h2">Total</Typography>
              <Typography variant="h2">₹{total.toFixed(2)}</Typography>
            </Box>

            {!hideCheckoutButton && (
              <Box sx={{ textAlign: "right", mt: 3 }}>
                <Button
                  variant="contained"
                  onClick={addToCheckout}
                  sx={{
                    width: "200px",
                    fontWeight: 600,
                    textTransform: "none",
                  }}
                >
                  Check Out
                </Button>
              </Box>
            )}
          </Box>
        )}
      </>
    );
  }
);

export default CartPageItems;
