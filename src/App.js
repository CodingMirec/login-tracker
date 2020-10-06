import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";

import "./App.css";
import Register from "./Register";
import Login from "./Login";
import Sidenav from "./Sidenav";
import Tracker from "./Tracker";

const items = [
  {
    name: "user",
    icon: "fa fa-user-circle-o",
    label: " Kathrin McKenzie",
    path: "/user",
  },
  {
    name: "tracker",
    icon: "fa fa-home",
    label: " Time Tracker",
    path: "/tracker",
  },
  {
    name: "dashboard ",
    icon: "fa fa-bar-chart",
    label: " Dashboard",
    path: "/dashboard",
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

const projects = [
  {
    name: "",
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
          <Route path="/user">
            <Sidenav items={items} />
            <h1>user</h1>
          </Route>
          <Route path="/tracker">
            <Tracker projects={projects} />
            <Sidenav items={items} />
          </Route>
          <Route path="/dashboard">
            <Sidenav items={items} />
            <h1>dashboard</h1>
          </Route>
          <Route path="/projects">
            <Sidenav items={items} />
            <h1>projects</h1>
          </Route>
          <Route path="/team">
            <Sidenav items={items} />
            <h1>team</h1>
          </Route>
          <Route path="/settings">
            <Sidenav items={items} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
