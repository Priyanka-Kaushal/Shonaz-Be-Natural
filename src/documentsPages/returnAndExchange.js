import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";

const ReturnExchangePolicy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Box sx={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <Typography variant="h5" fontWeight={600} gutterBottom>
        Return & Exchange Policy
      </Typography>
      <Typography paragraph>
        We accept exchanges and returns within 7 days of you receiving the shipment. A reverse pickup facility from your shipping address is available free of cost. Items must be marked as eligible for exchange and return on the product page.
      </Typography>

      <Typography variant="h6" fontWeight={500} gutterBottom>
        Return & Exchange Process
      </Typography>
      <Typography paragraph>
        To raise a request, email <b>sales.dpt@shonaz.in</b> or phone/WhatsApp us at <b>+91-7877199800</b>. We will initiate a reverse pickup from your shipping address within 48 hours.
      </Typography>
      <Typography paragraph>
        Re-use the original packaging, including the cloth bag and corrugated box for proper care and protection. Items must be in their original condition, with their labels and tags intact and must be unused, unwashed, and unsoiled without any stains or damages.
      </Typography>
      <Typography paragraph>
        Items returned, once verified at our facility, will be processed for an exchange or return. Typically, it takes 10-15 days to complete your exchange or return request.
      </Typography>

      <Typography variant="h6" fontWeight={500} gutterBottom>
        Refund Policy
      </Typography>
      <Typography paragraph>
        We issue a store credit for the full amount against all returns. There is no reverse shipping fee levied on any return requests. First-time exchange for size or a different style/product is free.
      </Typography>
      <Typography paragraph>
        A non-refundable shipping fee of Rs. 199 will be charged for any subsequent exchange requests or on orders placed using a credit note. Store credit is valid for a 1-year period from the date of issue.
      </Typography>
      <Typography paragraph>
        Shipping fees and gift services (if any) are non-refundable. Gift cards cannot be returned for their monetary value.
      </Typography>

      <Typography variant="h6" fontWeight={500} gutterBottom>
        Sale or Discount Policy
      </Typography>
      <Typography paragraph>
        All discounted products are eligible for only size exchanges at a chargeable return shipping fee of Rs. 199 (applicable only if the requested size is in stock). We are unable to accept returns on any discounted or sale merchandise.
      </Typography>
      <Typography paragraph>
        This applies to products bought at a discount, on sale, or through any offer or promotional code.
      </Typography>

      <Typography variant="h6" fontWeight={500} gutterBottom>
        Missing or Damaged Item Policy
      </Typography>
      <Typography paragraph>
        A missing or damaged item claim must be raised within 2 days of receiving the parcel. We will need photographs and an opening video of the item(s) and the delivery parcel it was received in.
      </Typography>
      <Typography paragraph>
        Our customer care team will investigate and offer an appropriate resolution.
      </Typography>

      <Typography variant="h6" fontWeight={500} gutterBottom>
        Cancellation Policy
      </Typography>
      <Typography paragraph>
        We accept cancellations against full refund or store credit within 12 hours of placing your order. We are unable to accept any cancellation requests after 12 hours.
      </Typography>

      <Typography variant="h6" fontWeight={500} gutterBottom>
        Need Help?
      </Typography>
      <Typography paragraph>
        Have a question? Chat with us, or e-mail us at <b>sales.dpt@shonaz.in</b>, or call/WhatsApp us at <b>+91-7877199800</b>. We’d be happy to answer any questions.
      </Typography>
    </Box>
  );
};

export default ReturnExchangePolicy;
