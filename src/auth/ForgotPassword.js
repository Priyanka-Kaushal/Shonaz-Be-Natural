import {
  Box,
  Typography,
  TextField,
  Button,
  Link,
  useTheme,
  Container,
} from "@mui/material";
import { useState } from "react";

const FogrgotPassword = () => {
  const theme = useTheme();
  const [email, setEmail] = useState();

  const handleOnEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          mt: 10,
          p: 4,
          boxShadow: theme.shadows[1],
           borderRadius: theme.shape.borderRadius,
          background: theme.palette.primary.contrastText,
        }}

      >

        <Typography variant="h1" sx={{ mb: 2, color: theme.palette.h4 }}>
          Reset your password
        </Typography>

        <Typography sx={{ mb: 2, color: theme.palette.primary.dark }}>
          We will send you an email to reset your password.
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
          value={email}
          onChange={handleOnEmail}
        />
        <Button
  variant="contained"
  color="primary"
  fullWidth
  sx={{
    mb: 2,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[2],
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    fontWeight: theme.typography.button.fontWeight,
    textTransform: theme.typography.button.textTransform,
    letterSpacing: theme.typography.button.letterSpacing,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
      boxShadow: theme.shadows[4],
    },
  }}
  onClick={handleOnSubmit}
>
  SUBMIT
</Button>



<Link
      href="/account/login"
      underline="hover"
      sx={{
        color: theme.palette.primary.dark,
        "&:hover": {
          color: theme.palette.primary.dark,
        },
      }}
    >
      Cancel
    </Link>


        {/* <Link href="/account/login" underline="hover"
        sx= {{hover: theme.palette.primary.dark}}>
          Cancel
        </Link> */}
      </Box>
    </Container>
  );
};

export default FogrgotPassword;
