import React, { Fragment, useContext } from "react";
import { AuthenticationContext } from "../context/AuthenticationContext";

const Logout = () => {
  const { setAuth } = useContext(AuthenticationContext);
  const handleLogout = () => {
    localStorage.removeItem("token");
    setAuth(false);
  };
  return (
    <Fragment>
      <button onClick={handleLogout} className="btn btn-primary">
        Logout
      </button>
    </Fragment>
  );
};

export default Logout;
