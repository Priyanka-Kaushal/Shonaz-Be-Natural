import { Box, Typography } from "@mui/material";

const Unauthorized = () => (
  <Box textAlign="center" mt={10}>
    <Typography variant="h4">403 - Unauthorized</Typography>
    <Typography>You do not have permission to access this page.</Typography>
  </Box>
);

export default Unauthorized;
