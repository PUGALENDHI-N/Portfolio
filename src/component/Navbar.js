import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  return (
    <nav className="navbar">

      <NavLink className="logo" to="/">
        P O R T F O L I O
      </NavLink>

      <div className={`nav-links ${menuActive ? "active" : ""}`}>

        <NavLink to="/" onClick={closeMenu}>
          Home
        </NavLink>

        <NavLink to="/about" onClick={closeMenu}>
          About
        </NavLink>

        <NavLink to="/project" onClick={closeMenu}>
          Projects
        </NavLink>

        <NavLink to="/contact" onClick={closeMenu}>
          Contact
        </NavLink>

      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

    </nav>
  );
}

export default Navbar;