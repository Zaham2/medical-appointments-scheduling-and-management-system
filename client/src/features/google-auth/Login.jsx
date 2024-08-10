import { GoogleLogin } from "@react-oauth/google";
import React from "react";

const Login = () => {
  const onSuccess = (credentialResponse) => {
    localStorage.setItem("token", credentialResponse.credential);
    localStorage.setItem("clientId", credentialResponse.clientId);
    // here i need to redirect to dashboard
    window.location.reload();
  };

  const onError = (error) => {
    console.log(error);
  };

  return (
    <div>
      <GoogleLogin onSuccess={onSuccess} onError={onError} />
    </div>
  );
};

export default Login;
