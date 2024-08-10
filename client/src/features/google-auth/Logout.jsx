import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("clientId");
    navigate("/");
  };

  return <button onClick={handleLogout}>Lougout</button>;
};

export default Logout;
