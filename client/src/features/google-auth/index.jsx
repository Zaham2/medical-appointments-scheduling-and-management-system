import React, { useEffect } from "react";
import Login from "./Login";
import Logout from "./Logout";

export default function GoogleAuth() {

  const [token, setToken] = React.useState(localStorage.getItem("token"));

  useEffect(() => {
    if (!localStorage.getItem("token") || localStorage.getItem("token") === token) {
        // we have no token or the token has not changed, do nothing
        return
    }
    setToken(localStorage.getItem("token"));
  }, [token]);

  return (
    <div>
      Welcome to Med-Hub
      {token ? <Logout /> : <Login />}
    </div>
  );
}
