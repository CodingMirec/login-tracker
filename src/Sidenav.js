import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";

import "./Sidenav.css";

function Sidenav({ items }) {
  return (
    <div className="sidenav">
      <ul className="nav flex-column">
        <div className="sidenav__brand pt-4 pb-2 text-center">
          <h1>
            <Link to="/">Time Tracker</Link>
          </h1>
        </div>
        <hr className="sidenav__hr" />
        <nav className="sidenav__content ">
          {items.map(({ label, name, icon, path, ...rest }) => (
            <li className="sidenav__content__item my-2" key={name} {...rest}>
              <Link to={path}>
                <i className={icon}></i>
                <span>{label}</span>
              </Link>
            </li>
          ))}
        </nav>
        <div className="sidenav__footer">
          <li>Copyright 2020</li>
        </div>
      </ul>
    </div>
  );
}

export default Sidenav;
