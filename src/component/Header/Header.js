import React from "react";
import "./Header.scss";
import Navbar from "./Navbar";
// import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <h1 className="header-logo">
        {/* <NavLink to="./">tenzin.div</NavLink> */}
        <a href="./">tenzin.dev</a>
      </h1>
      <div className="header-navbar">
        <Navbar />
      </div>
    </div>
  );
}

export default Header;
