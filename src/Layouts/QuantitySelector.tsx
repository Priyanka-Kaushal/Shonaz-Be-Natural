import React from "react";
import { Box, Button, Typography } from "@mui/material";

interface QuantitySelectorProps {
  quantity: number;
  maxQuantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  maxQuantity,
  onIncrement,
  onDecrement,
}) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", mx: 2 }}>
      <Typography sx={{ fontWeight: "bold", mr: 2 }}>Quantity:</Typography>

      <Button
        variant="outlined"
        size="small"
        onClick={onDecrement}
        sx={{
          fontWeight: "bold",
          minWidth: "40px",
          p: "4px 8px",
          mx: 1,
        }}
      >
        -
      </Button>

      <Typography sx={{ mx: 1, minWidth: "24px", textAlign: "center" }}>
        {quantity}
      </Typography>

      <Button
        variant="outlined"
        size="small"
        onClick={() => {
          if (quantity < maxQuantity) {
            onIncrement();
          } else {
            alert("Cannot select more than the available quantity");
          }
        }}
        sx={{
          fontWeight: "bold",
          minWidth: "40px",
          p: "4px 8px",
          mx: 1,
        }}
      >
        +
      </Button>
    </Box>
  );
};

export default QuantitySelector;
