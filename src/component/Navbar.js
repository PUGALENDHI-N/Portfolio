import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <Link className="logo" to="/">PORTFOLIO</Link>

      <div className={`nav-links ${menuActive ? "active" : ""}`}>
        <Link to="/" onClick={() => setMenuActive(false)}>Home</Link>
        <Link to="/about" onClick={() => setMenuActive(false)}>About</Link>
        <Link to="/project" onClick={() => setMenuActive(false)}>Project</Link>
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