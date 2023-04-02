import React, { useState } from "react";
import "./Navbar.css";
// import { NavLink } from "react-router-dom";

export default function Navbar() {
  // const [activeButton, setActiveButton] = useState(null);
  return (
    <div className="navbar">
      {/* <button className="button">
        <NavLink cla
        ssName="linkbutton" to={"/"}>
          Home
        </NavLink>
      </button> */}
      <nav>
      <ul>
        <li>
         <a className="linkbutton" href="#aboutme">
          About Me
        </a>
        </li>
        <li>
         <a className="linkbutton" href="#aboutme">
          Projects
        </a>
        </li>
        <li>
         <a className="linkbutton" href="#aboutme">
          Contact
        </a>
        </li>
      </ul>
      </nav>
    </div>
  );
}
