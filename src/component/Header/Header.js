import React from "react";
import "./Header.scss";
import Navbar from "./Navbar";

function Header() {
  return (
    <header>
      <h1 className="logo">
        <a href="./">tenzin.dev</a>
      </h1>
      <div className="header-navbar">
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
