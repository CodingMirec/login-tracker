import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";

import "./App.css";
import Register from "./Register";
import Login from "./Login";
import Sidenav from "./Sidenav";

const items = [
  {
    name: "time_tracker",
    icon: "fa fa-home",
    label: " Time Tracker",
    path: "/",
  },
  {
    name: "projects",
    icon: "fa fa-tasks",
    label: " Projects",
    path: "/projects",
  },
  {
    name: "team",
    icon: "fa fa-users",
    label: " Team",
    path: "/team",
  },
  {
    name: "settings",
    icon: "fa fa-cogs",
    label: " Settings",
    path: "/register",
  },
];

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
            <Sidenav items={items} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
