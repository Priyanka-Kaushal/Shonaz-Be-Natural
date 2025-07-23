import React from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { toast } from "react-hot-toast";


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
  const theme = useTheme();


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
          color: theme.palette.primary.dark,
          borderColor: theme.palette.primary.dark,
        }}
      >
       <Typography sx = {{color : theme.palette.primary.contrastText}}> - </Typography>
      </Button>

      <Box sx={{ backgroundColor: "#fff", p: 1 }}>
  <Typography
    sx={{
      mx: 1,
      minWidth: "24px",
      textAlign: "center",
      color: theme.palette.primary.dark,
      fontWeight: "bold",
    }}
  >
    {quantity}
  </Typography>
</Box>

      <Button
        variant="outlined"
        size="small"
        onClick={() => {
          if (quantity < maxQuantity) {
            onIncrement();
          } else {
            toast.error("Cannot select more than the available quantity");
          }
        }}
        sx={{
          fontWeight: "bold",
          minWidth: "40px",
          p: "4px 8px",
          mx: 1,
          color: theme.palette.primary.dark,
          borderColor: theme.palette.primary.dark,
        }}
      >
         <Typography sx = {{color : theme.palette.primary.contrastText}}> + </Typography>
        
      </Button>
    </Box>
  );
};

export default QuantitySelector;