import { GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";

const AuthProvider = (props) => {
  const clientId = import.meta.env.VITE_GOOGLE_APP_CLIENT_ID
  return (
    <GoogleOAuthProvider clientId={clientId} >
      {props.children}
    </GoogleOAuthProvider>
  );
};

export default AuthProvider;
