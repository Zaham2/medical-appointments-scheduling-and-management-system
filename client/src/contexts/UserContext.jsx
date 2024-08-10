import React, { createContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const response = await fetch(import.meta.env.VITE_BACKEND_URL + `/api/user`, 
  //       {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify({
  //           token: localStorage.getItem('token')
  //         })
  //       }
  //     );
  //     const data = await response.json();
  //     setUser(data);
  //   };

  //   fetchUser();
  // }, []);

  setUser()

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
