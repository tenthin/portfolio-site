import React, { useState } from "react";
import "./Navbar.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="navbar-container">
      <nav className={showMenu ? "navbar show" : "navbar"}>
        <ul>
          <li>
            <a className="linkbutton" href="#aboutme">
              About Me
            </a>
          </li>
          <li>
            <a className="linkbutton" href="#project">
              Projects
            </a>
          </li>
          <li>
            <a className="linkbutton" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="menu-icon" onClick={toggleMenu}>
        {showMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
    </div>
  );
}
