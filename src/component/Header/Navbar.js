import React, { useState } from "react";
import "./Navbar.css";
// import { NavLink } from "react-router-dom";

export default function Navbar() {
  // const [activeButton, setActiveButton] = useState(null);
  return (
    <div className="navbar">
      {/* <button className="button">
        <NavLink className="linkbutton" to={"/"}>
          Home
        </NavLink>
      </button> */}
      <button className="button">
        {/* <button
        className={`button ${activeButton === "about-me" ? "active" : ""}`}
        onClick={() => setActiveButton("about-me")}
      > */}
        {/* <NavLink className="linkbutton" to={"#aboutme"}> */}
        <a className="linkbutton" href="#aboutme">
          About Me
        </a>
        {/* </NavLink> */}
      </button>
      <button className="button">
        {/* <NavLink className="linkbutton" to={"/project"}> */}
        {/* Projects */}
        {/* </NavLink> */}
        <a className="linkbutton" href="#projects">
          Projects
        </a>
      </button>
      <button className="button">
        {/* <NavLink className="linkbutton" to={"/contact"}>
          Contact
        </NavLink> */}
        <a className="linkbutton" href="#contact">
          contact
        </a>
      </button>
    </div>
  );
}
