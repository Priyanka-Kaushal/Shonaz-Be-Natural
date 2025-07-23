import React from "react";
import {
  Box,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  useTheme
} from "@mui/material";

const AddressForm = ({
  formTitle,
  country,
  state,
  onCountryChange,
  onStateChange,
  disableEmail = false,
}) => {

    const theme= useTheme();
  return (
    <Box>
      {formTitle && (
        <Typography variant="h5" gutterBottom>
          {formTitle}
        </Typography>
      )}

      <FormControl fullWidth sx={{ display: "flex", gap: 2 }}>
        <Box sx={{ display: "flex", gap: 2 }}>
          <TextField label="First Name" name="firstName" fullWidth required />
          <TextField label="Last Name" name="lastName" fullWidth required />
        </Box>

        <TextField label="Company Name" name="companyName" fullWidth />

        <InputLabel id="country-label">Country</InputLabel>
        <Select
          labelId="country-label"
          value={country}
          onChange={onCountryChange}
        >
          <MenuItem value="India">India</MenuItem>
          <MenuItem value="Pakistan">Pakistan</MenuItem>
          <MenuItem value="USA">America</MenuItem>
        </Select>

        <Typography variant="h6">Street Address</Typography>
        <TextField
          label="House No. and Street Name"
          name="street"
          fullWidth
          required
        />
        <TextField
          label="Apartment, Suite, etc (optional)"
          name="apartment"
          fullWidth
        />
        <TextField label="Town / City" name="city" fullWidth required />

        <InputLabel id="state-label">State</InputLabel>
        <Select
          labelId="state-label"
          value={state}
          onChange={onStateChange}
        >
          <MenuItem value="Rajasthan">Rajasthan</MenuItem>
          <MenuItem value="Andhra Pradesh">Andhra Pradesh</MenuItem>
          <MenuItem value="Arunachal Pradesh">Arunachal Pradesh</MenuItem>
        </Select>

        <TextField label="Pin Code" name="pincode" fullWidth required />
        <TextField
          label="Contact Number"
          name="contactNumber"
          fullWidth
          required
        />
        {!disableEmail && (
          <TextField label="Email" name="email" fullWidth required />
        )}
      </FormControl>
    </Box>
  );
};

export default AddressForm;
