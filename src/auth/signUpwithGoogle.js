// import React from "react";
// import { Typography, Button, Box } from "@mui/material";
// import { FcGoogle } from "react-icons/fc";

// const SignupGoogle = () => {
//   const handleGoogleSignup = () => {
//     // Handle Google Sign-Up logic here (e.g. redirect to OAuth flow)
//     console.log("Signing up with Google...");
//   };

//   return (
//     <Box
//       display="flex"
//       flexDirection="column"
//       alignItems="center"
//       justifyContent="center"
//       p={4}
//       gap={2}
//       sx={{ minHeight: "40vh" }}
//     >
//       <Typography variant="h5" fontWeight="bold">
//         Sign Up with Google
//       </Typography>

//       <Button
//         onClick={handleGoogleSignup}
//         variant="outlined"
//         startIcon={<FcGoogle size={24} />}
//         sx={{
//           textTransform: "none",
//           padding: "10px 20px",
//           borderRadius: "8px",
//           fontSize: "16px",
//           fontWeight: "500",
//           color: "#555",
//           backgroundColor: "#fff",
//           "&:hover": {
//             backgroundColor: "#f5f5f5",
//           },
//         }}
//       >
//         Sign Up with Google
//       </Button>
//     </Box>
//   );
// };

// export default SignupGoogle;

import React from "react";
import { Typography, Button, Box } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { useKeycloak } from "@react-keycloak/web";

const SignupGoogle = () => {
  const { keycloak } = useKeycloak();

  const handleGoogleSignup = () => {
    // Redirect to Google login using Keycloak
    keycloak.login({
      idpHint: "google", // This should match the "Alias" in Keycloak
    });
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p={4}
      gap={2}
      sx={{ minHeight: "40vh" }}
    >
      <Typography variant="h5" fontWeight="bold">
        Sign Up with Google
      </Typography>

      <Button
        onClick={handleGoogleSignup}
        variant="outlined"
        startIcon={<FcGoogle size={24} />}
        sx={{
          textTransform: "none",
          padding: "10px 20px",
          borderRadius: "8px",
          fontSize: "16px",
          fontWeight: "500",
          color: "#555",
          backgroundColor: "#fff",
          "&:hover": {
            backgroundColor: "#f5f5f5",
          },
        }}
      >
        Sign Up with Google
      </Button>
    </Box>
  );
};

export default SignupGoogle;

