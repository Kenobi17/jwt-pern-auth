import React, { Fragment, useContext } from "react";
import { AuthenticationContext } from "../context/AuthenticationContext";

const Dashboard = () => {
  const { setAuth } = useContext(AuthenticationContext);
  return (
    <Fragment>
      <h1>Dashboard</h1>
      <button onClick={() => setAuth(false)}>Log Out</button>
    </Fragment>
  );
};

export default Dashboard;
