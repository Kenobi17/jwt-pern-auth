import React, { useState } from "react";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Dashboard from "./routes/Dashboard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { UserContextProvider } from "./context/AuthenticationContext";

function App() {
  return (
    <UserContextProvider>
      <div className="App container">
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
      </div>
    </UserContextProvider>
  );
}

export default App;