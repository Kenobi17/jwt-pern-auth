import React, { Fragment, useContext } from "react";
import { AuthenticationContext } from "../context/AuthenticationContext";

const Login = () => {
  const { setAuth } = useContext(AuthenticationContext);
  return (
    <Fragment>
      <h1>Login</h1>
      <button onClick={() => setAuth(true)}>Log In</button>
    </Fragment>
  );
};

export default Login;
