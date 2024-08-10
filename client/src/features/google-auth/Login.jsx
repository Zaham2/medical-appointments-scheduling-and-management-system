import { GoogleLogin } from "@react-oauth/google";
import React from "react";

const Login = () => {
  const onSuccess = (credentialResponse) => {
    // console.log(credentialResponse);
    // fetch(import.meta.env.VITE_BACKEND_URL + "/auth/login/user", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // }).then(() => {
    localStorage.setItem("token", credentialResponse.credential);
    localStorage.setItem("clientId", credentialResponse.clientId);
    // });
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
