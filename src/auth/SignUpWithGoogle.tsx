import React from "react";
import { jwtDecode } from "jwt-decode";
import axios from "../utils/axios"; 
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { GoogleLogin, CredentialResponse } from "@react-oauth/google";

const SignUpWithGoogle = () => {
  const navigate = useNavigate();

 const handleGoogleSuccess = async (credentialResponse: CredentialResponse) => {
    try {
      const credential = credentialResponse.credential;
      if (!credential) throw new Error("No Google credential returned");

      const decoded: any = jwtDecode(credential);
      console.log("Google user info:", decoded);

      const response = await axios.post("/api/auth/google-login", {
        token: credential,
      });

      const { token: appToken } = response;
      if (!appToken) {
        throw new Error("Token not found in response");
      }

      localStorage.setItem("auth_token", appToken);

      toast.success("Login successful!");
      navigate("/");
    } catch (error: any) {
      console.error("Google login error:", error);
      toast.error(error.message || "Google Login failed.");
    }
  };

  return (
    <div style={{ marginTop: "16px", marginBottom: "16px", textAlign: "center" }}>
         <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={() => toast.error("Google login failed")}
          />
    </div>
  );
};

export default SignUpWithGoogle;
