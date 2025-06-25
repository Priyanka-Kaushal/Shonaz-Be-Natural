// // import React from "react";
// // import { Box, Typography } from "@mui/material";
// // import { toast } from "react-toastify";

// // const Orderconfirmation = () => {
// //     return(
// //     <Box textAlign="center" mt={6}>
// //       <Typography variant="h4" color="primary" gutterBottom>
// //         ✅ Your Order is in Process
// //       </Typography>
// //       <Typography variant="h6" color="textSecondary">
// //         ⏳ Approval of your order will be shown in 1 hour.
// //       </Typography>
// //       {/* if(){
// //         <Typography> Your Confrimation is pending from the Owner</Typography>
// //       } else {
// //          <Typography> Your order is confirmed</Typography>
// //       } */}
     
// //     </Box>
// //   );
// // };

// // export default Orderconfirmation;

// import React, { useEffect, useState } from "react";
// import { Box, Typography, CircularProgress } from "@mui/material";
// import axios from "axios";

// const OrderConfirmation = ({ orderId }) => {
//   const [status, setStatus] = useState("");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchStatus = async () => {
//       try {
//         const res = await axios.get(`/api/orders/${orderId}`);
//         setStatus(res.data.status);
//       } catch (error) {
//         console.error("Error fetching order status:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStatus();

//     // Optional: poll every 30s to get updates
//     const interval = setInterval(fetchStatus, 30000);
//     return () => clearInterval(interval);
//   }, [orderId]);

//   const renderStatusMessage = () => {
//     switch (status) {
//       case "approved":
//         return (
//           <Typography variant="h6" color="green">
//             ✅ Your order has been approved and will be delivered in 7 days.
//           </Typography>
//         );
//       case "not_available":
//         return (
//           <Typography variant="h6" color="error">
//             ❌ Sorry, the product is currently not available.
//           </Typography>
//         );
//       case "pending":
//       default:
//         return (
//           <Typography variant="h6" color="textSecondary">
//             ⏳ Your confirmation is pending from the owner. Please check back later.
//           </Typography>
//         );
//     }
//   };

//   return (
//     <Box textAlign="center" mt={6}>
//       <Typography variant="h4" color="primary" gutterBottom>
//         🛒 Your Order Status
//       </Typography>
//       {loading ? (
//         <CircularProgress />
//       ) : (
//         renderStatusMessage()
//       )}
//     </Box>
//   );
// };

// export default OrderConfirmation;

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
