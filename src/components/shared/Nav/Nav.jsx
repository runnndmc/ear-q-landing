import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  function scrollTop(){
    window.scrollTo({top:0, behavior: "smooth"})
  }
  return (
    <nav>
      <div className="nav">
        <NavLink className="logo" to="/" onClick={scrollTop}>
          <img src="../EarQ_Logo.jpg" alt="EarQ Logo" width="200" />
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
