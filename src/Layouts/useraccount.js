import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Typography,
  Link,
  Checkbox,
  TextField,
  FormControlLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import AddressForm from "../layoutsOfPages/AddressForm";
import CartPageItems from "../layoutsOfPages/cartPageItems";

const CheckoutForm = ({ showTotalSummary = true }) => {
  const navigate = useNavigate();
  const cartRef = useRef();

  const [showNewAddressForm, setShowNewAddressForm] = useState(false);
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [total, setTotal] = useState(0);

  const handleCheckboxToggle = (e) => {
    setShowNewAddressForm(e.target.checked);
  };

  useEffect(() => {
    if (cartRef.current?.getTotal) {
      setTotal(cartRef.current.getTotal());
    }
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        mt: "80px",
        px: 5,
        maxWidth: "1200px",
        mx: "auto",
        mb: "120px",
      }}
    >

      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 600 }}>
          Your cart total is ₹{total.toFixed(2)}
        </Typography>
      </Box> */}

    
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          alignItems: "flex-start",
          width: "100%",
        }}
      >
       
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" sx={{ fontWeight: 500, mb: 2 }}>
            Billing details
          </Typography>

          <AddressForm
            country={country}
            state={state}
            onCountryChange={(e) => setCountry(e.target.value)}
            onStateChange={(e) => setState(e.target.value)}
          />

          <Link
            component="button"
            onClick={() => navigate("/account/addresses")}
            sx={{ mt: 1, display: "block" }}
          >
            View addresses
          </Link>
        </Box>

      
        <Box sx={{ flex: 1 }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={showNewAddressForm}
                onChange={handleCheckboxToggle}
              />
            }
            label={
              <Typography variant="h5" sx={{ fontWeight: 500 }}>
                Ship to a different address?
              </Typography>
            }
            sx={{ mt: 1 }}
          />

          {showNewAddressForm && (
            <AddressForm
              country={country}
              state={state}
              onCountryChange={(e) => setCountry(e.target.value)}
              onStateChange={(e) => setState(e.target.value)}
              disableEmail
            />
          )}

          <TextField
            label="Order Notes (optional)"
            name="orderNotes"
            placeholder="Notes about your order, delivery instructions, etc."
            fullWidth
            multiline
            rows={4}
            sx={{ mt: 2 }}
          />
        </Box>
      </Box>

    
      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" sx={{ fontWeight: 500, mb: 2 }}>
          Your Cart
        </Typography>
       <CartPageItems
  ref={cartRef}
  showTotalSummary={showTotalSummary}
  hideCheckoutButton={true}
/>
      </Box>


      <Box>
        <Typography> Payment Method </Typography>
      </Box>
    </Box>
  );
};

export default CheckoutForm;
