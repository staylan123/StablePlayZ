import React from "react";
import "../../styles/Navbar.css";
import { NavLink } from "react-router-dom";
import { NavLinks } from "./NavLinks";

function Navbar() {

  // Creates an li Link for ever item the NavLink.js object array (index is for map key)
  const navLinks = NavLinks.map(({ navItemName, url }, index) => {
    return (
      <li key={index}>
        <NavLink to={url}>{navItemName}</NavLink>
      </li>
    );
  });

  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/">
          Stable<font>PlayZ</font>
        </NavLink>
      </div>
      <nav className="nav">
        <ul>
          {navLinks}
            <button className="navButton">
              <NavLink to="/signup">Sign Up</NavLink>
            </button>
            <button className="navButton">
              <NavLink to="/login">Login</NavLink>
            </button>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
