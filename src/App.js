import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import Register from "./Register";
import Login from "./Login";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <h1>Home</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
