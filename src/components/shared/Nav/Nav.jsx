import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="nav">
        <NavLink className="logo" to="/">
          <img src="../EarQ_Logo.jpg" alt="EarQ Logo" width="200" />
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
