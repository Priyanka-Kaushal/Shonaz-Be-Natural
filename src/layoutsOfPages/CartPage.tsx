import React, { useRef, useEffect, useState } from "react";
import {
  Box,
  Typography,
  Divider,
  Button,
  useTheme,
} from "@mui/material";
import CartPageItems from "../layoutsOfPages/cartPageItems";

const CartPage = ({ showTotalSummary = true }) => {
  const theme = useTheme();
  const cartRef = useRef();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (cartRef.current?.getTotal) {
      setTotal(cartRef.current.getTotal());
    }
  }, []);

  return (
    <Box sx={{ p: 10, mt: "30px", mb: "30px" }}>
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          mb: 3,
        }}
      >
        <Typography variant="h4">
          Your cart total is ₹{total.toFixed(2)}
        </Typography>

        <Button
          variant="contained"
          onClick={() => cartRef.current?.addToCheckout()}
          sx={{
            fontWeight: 600,
            textTransform: "none",
           borderRadius: theme.shape.borderRadius,
            boxShadow: "none",
            "&:hover": {
              boxShadow: theme.shadows[6],
              backgroundColor: theme.palette.primary.dark,
            },
          }}
        >
          Check Out
        </Button>
      </Box>

      <Divider />

      <CartPageItems ref={cartRef} showTotalSummary={showTotalSummary} />
    </Box>
  );
};

export default CartPage;
