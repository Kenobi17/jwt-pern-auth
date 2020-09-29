import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const [userToken, setUserToken] = useState({});

  return (
    <UserContext.Provider value={{ userToken, setUserToken }}>
      {props.children}
    </UserContext.Provider>
  );
};
