import { GoogleLogin } from "@react-oauth/google";
import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  // if(!localStorage.getItem("token")){
  //   navigate("/")
  // }
  
  const onSuccess = (credentialResponse) => {
    localStorage.setItem("token", credentialResponse.credential);
    localStorage.setItem("clientId", credentialResponse.clientId);
    navigate("/dashboards");
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
