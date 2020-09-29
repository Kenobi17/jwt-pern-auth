import React, { useState, createContext } from "react";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  return (
    <AuthenticationContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, setAuth }}>
      {props.children}
    </AuthenticationContext.Provider>
  );
};
