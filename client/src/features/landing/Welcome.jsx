import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/auth");
  };

  return (
    <div>
      <h1>Welcome to Med-Hub</h1>
      <button onClick={onClick}>Sign in</button>
    </div>
  );
};

export default Welcome;
