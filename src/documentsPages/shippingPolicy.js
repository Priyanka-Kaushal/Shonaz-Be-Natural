import React, { useEffect } from "react";
import { Container, Box, Typography } from "@mui/material";

const ShippingDeliveriesPolicy = () => {
  useEffect(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }, []);

  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>
        Shipping & Deliveries Policy
      </Typography>

      <Box sx={{ lineHeight: 1.7 }}>
        <p>
          We are committed to delivering products that meet your expectations. If you require any assistance in understanding our shipping policy, please email us at <a href="mailto:sales.dpt@shonaz.in">sales.dpt@shonaz.in</a>.
        </p>

        <h3>Free Shipping</h3>
        <p>
          Free shipping is available for orders of INR 1000 or more. Orders where free shipping applies are not expedited. For orders below INR 1000, a convenience charge of Rs. 100 applies.
        </p>

        <h3>Shipping & Delivery Time</h3>
        <p>
          We ship through reputed courier agencies to ensure fast and secure delivery. We aim to deliver products within 5-7 business days of order confirmation. For remote locations, deliveries may exceed 10 days.
        </p>
        <p>
          All items are shipped within 2-3 working days of receiving the order. If we cannot ship your order within 7 days, we will cancel the unshipped part and issue a refund.
        </p>

        <h3>Damaged or Tampered Packages</h3>
        <p>
          If you believe your package is damaged or tampered with, please email us at <a href="mailto:sales.dpt@shonaz.in">sales.dpt@shonaz.in</a> with your order reference number. We will ensure a replacement at the earliest.
        </p>

        <h3>Cash on Delivery (COD)</h3>
        <p>
          COD is available across most pin codes in India. We do not offer try-and-buy or open-box delivery. You must pay before opening your parcel. The courier partner cannot process exchanges or returns.
        </p>

        <h3>International Orders</h3>
        <p>
          Processing international orders takes 4 working days, with delivery taking 9–18 days. Shipping charges are displayed at checkout. Duties and taxes must be paid directly to the shipping agency at the time of delivery.
        </p>

        <h3>Tracking Orders</h3>
        <p>
          Tracking details will be sent via email once your order is dispatched. If you do not receive an email after 4 days of placing an order, please contact us at <a href="mailto:sales.dpt@shonaz.in">sales.dpt@shonaz.in</a>.
        </p>

        <h3>Out of Delivery Zone (ODZ)</h3>
        <p>
          If your location falls in an ODZ, we will notify you within 3 working days. You may cancel your order for a full refund or provide an alternative address.
        </p>

        <h3>Shipping Delays</h3>
        <p>
          Delays may occur due to unforeseen circumstances beyond our control.
        </p>

        <h3>Order Cancellation Due to Delivery Issues</h3>
        <p>
          If our courier attempts delivery twice but is unsuccessful, the package will be returned to our warehouse. We will attempt to contact you, and if unsuccessful, we will consider the order terminated and issue a refund within 30 days.
        </p>

        <h3>Sale Period Shipping Charges</h3>
        <p>
          During sales, shipping charges of ₹100 for prepaid orders and ₹150 for COD orders will be applicable.
        </p>
      </Box>
    </Container>
  );
};

export default ShippingDeliveriesPolicy;
