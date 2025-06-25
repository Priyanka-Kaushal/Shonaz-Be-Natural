// // import React from "react";
// // import { Box, Typography, Button } from "@mui/material";
// // import { useNavigate } from "react-router-dom";
// // import Scanner from "../../Assets/Images/scanner.jpeg";
// // import axios from "axios";

// // const PaymentMethod = () => {
// //   const navigate = useNavigate();

// //   // const handleWhatsappMessage = () => {
// //   //   const phone = "7222875118";
// //   //   const message = encodeURIComponent("Hi, I have completed the payment.");
// //   //   const whatsappURL = `https://wa.me/${phone}?text=${message}`;

// //   //   // Open WhatsApp chat in a new tab
// //   //   window.open(whatsappURL, "_blank");

// //   //   // Navigate to order confirmation after a delay
// //   //   setTimeout(() => {
// //   //     navigate("/payment_confirmation_request");
// //   //   }, 2000);
// //   // };

// //   const handleWhatsappMessage = async () => {
// //   const phone = "7222875118";
// //   const message = encodeURIComponent("Hi, I have completed the payment.");
// //   const whatsappURL = `https://wa.me/${phone}?text=${message}`;

// //   // 1. Open WhatsApp chat for user (manual message)
// //   // window.open(whatsappURL, "_blank");

// //   // 2. Automatically send message to owner via backend
// //   try {
// //     await axios.post("/api/send-payment-alert", {
// //       customerName: "Priyanka",  // Can also use auth context if dynamic
// //       amount: "₹899",
// //       product: "2 T-shirts",
// //     });
// //     console.log("Owner notified via WhatsApp Cloud API");
// //   } catch (error) {
// //     console.error(" Failed to notify owner:", error?.response?.data || error.message);
// //   }

// //   // 3. Redirect to confirmation page
// //   setTimeout(() => {
// //     navigate("/payment_confirmation_request");
// //   }, 2000);
// // };


// //   return (
// //     <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
// //       <Typography variant="h5" gutterBottom>
// //         Scan & Pay
// //       </Typography>

// //       <img
// //         src={Scanner}
// //         alt="Scan to Pay"
// //         style={{ width: 200, height: 200, marginBottom: 16 }}
// //       />

// //       <Typography variant="body1" gutterBottom>
// //         UPI ID: <strong>7222875118@ybl</strong>
// //       </Typography>

// //       <Button
// //         variant="contained"
// //         color="success"
// //         onClick={handleWhatsappMessage}
// //         sx={{ mt: 2 }}
// //       >
// //         Hi, I have purchased 2 t-shirts worth ₹899. Please approve the order.
// //       </Button>
// //     </Box>
// //   );
// // };

// // export default PaymentMethod;
// import React from "react";
// import { Box, Typography, Button } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import Scanner from "../../Assets/Images/scanner.jpeg";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const PaymentMethod = () => {
//   const navigate = useNavigate();

// const handleWhatsappMessage = async (navigate) => {
//   try {
//     const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:4000";
//     // const API_URL = `${BASE_URL}/api/auth/signIn`;


//     await axios.post(`${BASE_URL}/api/send-payment-alert`, {
//       customerName: "Priyanka",
//       amount: "₹899",
//       product: "2 T-shirts",
//     });

//     console.log("Owner notified via WhatsApp Cloud API");
//   } catch (error) {
//     console.error("Failed to notify owner:", error?.response?.data || error.message);
//     alert("Failed to notify owner via WhatsApp.");
//   }

//   setTimeout(() => {
//     navigate("/payment_confirmation_request");
//   }, 2000);
// };

//   return (
//     <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
//       <Typography variant="h5" gutterBottom>
//         Scan & Pay
//       </Typography>

//       <img
//         src={Scanner}
//         alt="Scan to Pay"
//         style={{ width: 200, height: 200, marginBottom: 16 }}
//       />

//       <Typography variant="body1" gutterBottom>
//         UPI ID: <strong>7222875118@ybl</strong>
//       </Typography>

//       <Button
//         variant="contained"
//         color="success"
//         onClick={handleWhatsappMessage}
//         sx={{ mt: 2 }}
//       >
//         Hi, I have purchased 2 t-shirts worth ₹899. Please approve the order.
//       </Button>
//     </Box>
//   );
// };

// export default PaymentMethod;
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Scanner from "../../Assets/Images/scanner.jpeg";
import axios from "axios";

const PaymentMethod = () => {
  const navigate = useNavigate();

  const handleWhatsappMessage = async () => {
    const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:4000";

    try {
      await axios.post(`${BASE_URL}/api/send-payment-alert`, {
        customername: "Priyanka Kaushal",      
        amount: "₹899",                 
        product: "2 T-shirts",         
      });

      console.log("Owner notified via WhatsApp Cloud API");
    } catch (error) {
      console.error("Failed to notify owner:", error?.response?.data || error.message);
      alert("Failed to notify owner via WhatsApp.");
    }

    setTimeout(() => {
      navigate("/payment_confirmation_request");
    }, 2000);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
      <Typography variant="h5" gutterBottom>
        Scan & Pay
      </Typography>

      <img
        src={Scanner}
        alt="Scan to Pay"
        style={{ width: 200, height: 200, marginBottom: 16 }}
      />

      <Button
        variant="contained"
        color="success"
        onClick={handleWhatsappMessage}
        sx={{ mt: 2 }}
      >
        Please approve my order.
      </Button>
    </Box>
  );
};

export default PaymentMethod;
