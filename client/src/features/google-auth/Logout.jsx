import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // const token = localStorage.getItem("token");
    // fetch(`https://accounts.google.com/o/oauth2/revoke?token=${token}`, {
    //   method: 'POST',
    //   mode: 'no-cors'
    // })
    //   .then(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("clientId");
    navigate("/");
    // });
  };

  return <button onClick={handleLogout}>Lougout</button>;
};

export default Logout;
