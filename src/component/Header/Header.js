import React from "react";
import "./Header.scss";
import Navbar from "./Navbar";
// import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header-logo">
        {/* <NavLink to="./">tenzin.div</NavLink> */}
        <a href="./">tenzin.dev</a>
      </div>
      <div className="header-navbar">
        <Navbar />
      </div>
    </div>
  );
}

export default Header;
