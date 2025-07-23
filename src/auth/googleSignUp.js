// import React from "react";
// import { GoogleLogin } from "@react-oauth/google";
// import { jwtDecode } from "jwt-decode";
// import axios from "../utils/axios";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-hot-toast";

// const GoogleSignUp = () => {
//   const navigate = useNavigate();

//   const handleGoogleSuccess = async (credentialResponse) => {
//     try {
//       const credential = credentialResponse.credential;
//       if (!credential) throw new Error("No Google credential returned");

//       const decoded = jwtDecode(credential);
//       console.log("Google user info:", decoded);

//       const response = await axios.post("/api/auth/google-login", {
//         token: credential,
//       });

//       const appToken = response.data.token;
//       if (!appToken) {
//         throw new Error("Token not found in response");
//       }

//       localStorage.setItem("auth_token", appToken);
//       toast.success("Login successful!");
//       navigate("/shop/new-arrivals");
//     } catch (error) {
//       console.error("Google login error:", error);
//       toast.error(error.message || "Google Login failed.");
//     }
//   };

//   return (
//     <div style={{ marginTop: "1rem", textAlign: "center" }}>
//       <GoogleLogin
//         onSuccess={handleGoogleSuccess}
//         onError={() => toast.error("Google login failed")}
//       />
//     </div>
//   );
// };

// export default GoogleSignUp;
