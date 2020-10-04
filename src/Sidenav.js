import React from "react";
import { Link } from "react-router-dom";

import "./Sidenav.css";

function Sidenav({ items }) {
  return (
    <nav className="sidebar">
      <ul className="nav flex-column">
        <h1>
          <a href="/">Time Tracker</a>
        </h1>
        {items.map(({ label, name, ...rest }) => (
          <li className="nav-link" key={name} {...rest}>
            <a href="#abc">{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Sidenav;
