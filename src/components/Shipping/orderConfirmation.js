import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import axios from "axios";

const OrderConfirmation = ({ customerPhone }) => {
  const [status, setStatus] = useState("");

  useEffect(() => {
    const fetchStatus = async () => {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/orderstatus?phone=${customerPhone}`);
      setStatus(res.data.status);
    };

    fetchStatus();
  }, [customerPhone]);

  return (
    <Box textAlign="center" mt={6}>
      <Typography variant="h4">Order Status: {status}</Typography>
      {status === "Approved" && <Typography>Your order is approved and will be delivered in 7 days.</Typography>}
      {status === "Unavailable" && <Typography>Sorry, the product is currently unavailable.</Typography>}
      {status === "Pending" && <Typography>Awaiting confirmation from the store owner.</Typography>}
    </Box>
  );
};

export default OrderConfirmation;
