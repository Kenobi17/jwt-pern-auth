import React from "react";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Dashboard from "./routes/Dashboard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AuthenticationContextProvider } from "./context/AuthenticationContext";

function App() {
  return (
    <AuthenticationContextProvider>
      <div className="App container">
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
      </div>
    </AuthenticationContextProvider>
  );
}

export default App;
