import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState({});

  return (
    <UserContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {props.children}
    </UserContext.Provider>
  );
};
